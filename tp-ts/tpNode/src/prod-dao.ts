//DAO sur produit avec sql-lite (nécessite npm install -s sqlite3 et npm i --save-dev @types/sqlite3)

import sqlite3 from 'sqlite3';
import { Produit } from './produit';


function withDbConnection(callbackWithDb : any){
    var db = new sqlite3.Database('mydb.db');
    callbackWithDb(db);
    db.close();
}

function init_produit_db(){
    withDbConnection(function(db : sqlite3.Database) {
        db.serialize(function() {
            // Produit with pk = code (integer)
            //nb , the column with INTEGER PRIMARY KEY is a alias
            // for rowid implicit autoincr colomn of any slqlite table
            // do not use AUTOINCREMENT keyword with sqlite (not useful)
            db.run("CREATE TABLE if not exists produit (id INTEGER PRIMARY KEY , label VARCHAR(64) NOT  NULL , prix DOUBLE)");
            db.run("DELETE FROM produit");
            var pst = db.prepare("INSERT INTO produit(id,label,prix) VALUES (?,?,?)");
            pst.run([1 , "Classeur" , 4.0]); //en [] , la liste des valeurs qui remplacent les ?
            pst.run([2 , "Cahier" , 2.1]);
            pst.run([3 , "Colle" , 2.4]);
            pst.run([4 , "Stylo" , 1.9]);
            pst.finalize();
            db.each("SELECT id,label,prix FROM produit", function(err, row) {
                console.log(JSON.stringify(row));
             });
        }); //end de db.serialize() : déclenchements en mode séquentiel
    }); //end of withDbConnection()
}

function get_produits_by_WhereClause(whereClause :string , cb_with_err_or_res : any){
    withDbConnection(function(db : sqlite3.Database) {
        let sql = "SELECT id,label,prix FROM produit " + whereClause;
        db.all(sql, [], function(err, rows) {
        //console.log(JSON.stringify(rows));
        cb_with_err_or_res(err,rows)
        });
    }); //end of withDbConnection()
}


function get_produit_by_id(id:number, cb_with_err_or_res:any){
    withDbConnection(function(db : sqlite3.Database) {
        let sql = "SELECT id,label,prix FROM produit WHERE id=?";
        db.get(sql, id, function(err, row) {
        //console.log(JSON.stringify(row));
        cb_with_err_or_res(err,row)
        });
    }); //end of withDbConnection()
}

function get_produit_by_id_promise(id:number) : Promise<Produit> {
    return new Promise(
        (resolve,reject)=>{
            withDbConnection(function(db : sqlite3.Database) {
                let sql = "SELECT id,label,prix FROM produit WHERE id=?";
                db.get(sql, id, function(err, row) {
                   if(err==null)
                      resolve(row); //resolve pour renvoyer données quand ça se passe bien
                    else
                      reject(err); //reject pour renvoyer objet erreur quand ça se passe mal
                });
            }); //end of withDbConnection()
        }
    );
}

export default { withDbConnection ,
                  init_produit_db , 
                  get_produits_by_WhereClause , 
                  get_produit_by_id ,
                  get_produit_by_id_promise
                }