<?php

function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      return $conn;
   } catch(PDOException $e) {
      die('{"error":"'.$e->getMessage().'"}');
   }
}


// $r = PDO result
function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(\PDO::FETCH_OBJ)) $a[] = $row;
   return $a;
}


/*
$c = connection
$ps = prepared statement
$p = parameters
*/
function makeQuery($c,$ps,$p,$makeResults=true) {
   try {
      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         // "statement"=>$ps,
         // "params"=>$p,
         "result"=>$r
      ];
   } catch(PDOException $e) {
      return ["error"=>"Query Failed: ".$e->getMessage()];
   }
}

function makeStatement($data){
    $c = makeConn();
    $t = $data->type;
    $p = $data->params;
    
    switch($t){
        case "users_all":
            return makeQuery($c, "SELECT * FROM `track_202230_users`", $p);
        case "dogs_all":
            return makeQuery($c, "SELECT * FROM `track_202230_dogs`", $p);
        case "locations_all":
            return makeQuery($c, "SELECT * FROM `track_202230_locations`", $p);    
            
        case "user_by_id":
            return makeQuery($c, "SELECT * FROM `track_202230_users` WHERE `id`= ?", $p);
        case "dog_by_id":
            return makeQuery($c, "SELECT * FROM `track_202230_dogs` WHERE `id`= ?", $p);
        case "location_by_id":
            return makeQuery($c, "SELECT * FROM `track_202230_locations` WHERE `id`= ?", $p);
            
        case "dogs_by_user_id":
            return makeQuery($c, "SELECT * FROM `track_202230_dogs` WHERE `user_id`= ?", $p);
        case "locations_by_user_id":
            return makeQuery($c, "SELECT * FROM `track_202230_locations` WHERE `user_id`= ?", $p);
        
        case "recent_animal_locations":
            return makeQuery($c,"SELECT *
                FROM `track_202230_dogs` a
                JOIN (
                    SELECT lg.*
                    FROM `track_202230_locations` lg
                    WHERE lg.id = (
                        SELECT lt.id
                        FROM `track_202230_locations` lt
                        WHERE lt.animal_id = lg.animal_id
                        ORDER BY lt.date_create DESC
                        LIMIT 1
                    )
                ) l
                ON a.id = l.animal_id
                WHERE a.user_id = ?
            ", $p);
            
        case "locations_by_animal_id":
            return makeQuery($c, "SELECT * FROM `track_202230_locations` WHERE `animal_id` = ?", $p);
        
        
        /* INSERTS */
         case "insert_user1":
         $r = makeQuery($c,"SELECT id FROM `track_202230_users` WHERE `email` = ? OR `username`=? ", [ $p[0], $p[1] ]);
         if(count($r['result'])){
            return ["error"=>"Username or Email already exists"];
         }
            
            makeQuery($c, "INSERT INTO
            
            `track_202230_users`
            (`name`, `username`, `email`, `password`, `age`, `description`, `img`, `date_create`)
            VALUES
            (?, ?, ?, md5(?), ?, ?, 'https://via.placeholder.com/400/?text=USER', NOW())
            ", $p, false);
        
            return ["id"=>$c->lastInsertId()];
            
        case "insert_user":
         $r = makeQuery($c,"SELECT id FROM `track_202230_users` WHERE `username`=? OR `email` = ?", [ $p[1], $p[2] ]);
         if(count($r['result']))
            return ["error"=>"Username or Email already exists"];
            
            makeQuery($c, "INSERT INTO
            
            `track_202230_users`
            (`name`, `username`, `email`, `password`, `age`, `description`, `img`, `date_create`)
            VALUES
            (?, ?, ?, md5(?), ?, ?, 'https://via.placeholder.com/400/?text=USER', NOW())
            ", $p, false);
        
            return ["id"=>$c->lastInsertId()];

        
        case "insert_animal":
            makeQuery($c, "INSERT INTO
            
            `track_202230_dogs`
            (`user_id`, `name`, `breed`, `description`, `img`, `date_create`)
            VALUES
            (?, ?, ?, ?, 'https://via.placeholder.com/400/?text=DOG', NOW())
            ", $p, false);
        
            return ["id"=>$c->lastInsertId()];
            
        case "insert_location":
            makeQuery($c, "INSERT INTO
            
            `track_202230_locations`
            (`animal_id`, `lat`, `lng`, `description`, `photo`, `icon`, `date_create`)
            VALUES
            (?, ?, ?, ?, 'https://via.placeholder.com/400/?text=PHOTO','https://via.placeholder.com/400/?text=ICON', NOW())
            ", $p, false);
        
            return ["id"=>$c->lastInsertId()];
            
        
        case "check_signin":
            return makeQuery($c, "SELECT id from `track_202230_users` WHERE `username` = ? AND `password` = md5(?)", $p);
        
        default:
            return ["error"=>"No Matched Type"];
    }
}

/*
"SELECT * FROM track_202230_users",
"SELECT * FROM track_202230_users WHERE id = ?",
"SELECT * FROM track_202230_dogs WHERE user_id = ?",

      makeQuery(
         makeConn(),
         "SELECT * FROM track_202230_dogs WHERE user_id = ?",
         [3]
      )
*/

$data = json_decode(file_get_contents("php://input"));

echo json_encode(
    makeStatement($data),
    JSON_NUMERIC_CHECK
);