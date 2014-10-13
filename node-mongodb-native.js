(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("node-mongodb-native", function(server, options) {
    server._mongoose = {};
    return { defs : defs };
  });
    
  var defs = {
 "!name": "node-mongodb-native",
 "!define": {
  "!node": {
   "mongodb": {
    "!type": "fn()",
    "MongoClient": "mongoclient.MongoClient",
    "Db": "db.Db",
    "Server": "server.Server",
    "ReplSet": "replset.ReplSet",
    "Mongos": "mongos.Mongos",
    "ReadPreference": "readpreference.ReadPreference",
    "GridStore": "gridstore.GridStore",
    "Collection": "collection.Collection",
    "Admin": "admin.Admin",
    "Cursor": "cursor.Cursor"
   }
  },
  "admin": {
   "Admin": {
    "!type": "fn(db: +Object) -> fn()",
    "!doc": "\n\nAllows the user to access the admin functionality of MongoDB",
    "prototype": {
     "buildInfo": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieve the server information for the current\ninstance of the db client"
     },
     "serverStatus": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieve this db's server status."
     },
     "profilingLevel": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieve the current profiling Level for MongoDB"
     },
     "ping": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nPing the MongoDB server and retrieve results"
     },
     "authenticate": {
      "!type": "fn(username: string, password: string, callback: fn())",
      "!doc": "\n\nAuthenticate against MongoDB"
     },
     "logout": {
      "!type": "fn(options?: +Object, callback: fn())",
      "!doc": "\n\nLogout current authenticated user"
     },
     "addUser": {
      "!type": "fn(username: string, password: string, options?: +Object, callback: fn())",
      "!doc": "\n\nAdd a user to the MongoDB server, if the user exists it will\noverwrite the current password"
     },
     "removeUser": {
      "!type": "fn(username: string, options?: +Object, callback: fn())",
      "!doc": "\n\nRemove a user from the MongoDB server"
     },
     "setProfilingLevel": {
      "!type": "fn(level: string, callback: fn())",
      "!doc": "\n\nSet the current profiling level of MongoDB"
     },
     "profilingInfo": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrive the current profiling information for MongoDB"
     },
     "command": {
      "!type": "fn(command: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nExecute a db command against the Admin database"
     },
     "validateCollection": {
      "!type": "fn(collectionName: string, options?: +Object, callback: fn())",
      "!doc": "\n\nValidate an existing collection"
     },
     "listDatabases": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nList the available databases"
     },
     "replSetGetStatus": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nGet ReplicaSet status"
     }
    }
   }
  },
  "collection": {
   "Collection": {
    "!type": "fn(db: +Object, collectionName: string, pkFactory?: +Object, options?: +Object) -> +Object",
    "!doc": "\n\nCreate a new Collection instance (INTERNAL TYPE, do not instantiate directly)",
    "prototype": {
     "insert": {
      "!type": "fn(docs: [?], options?: +Object, callback?: fn()) -> +collection.Collection",
      "!doc": "\n\nInserts a single document or a an array of documents into MongoDB."
     },
     "remove": {
      "!type": "fn(selector?: +Object, options?: +Object, callback?: fn())",
      "!doc": "\n\nRemoves documents specified by <code>selector</code> from the db."
     },
     "rename": {
      "!type": "fn(newName: string, options?: +Object, callback: fn())",
      "!doc": "\n\nRenames the collection."
     },
     "save": {
      "!type": "fn(doc?: +Object, options?: +Object, callback?: fn())",
      "!doc": "\n\nSave a document. Simple full document replacement function. Not recommended for efficiency, use atomic\noperators and update instead for more efficient operations."
     },
     "update": {
      "!type": "fn(selector: +Object, document: +Object, options?: +Object, callback?: fn())",
      "!doc": "\n\nUpdates documents."
     },
     "distinct": {
      "!type": "fn(key: string, query?: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nThe distinct command returns returns a list of distinct values for the given key across a collection."
     },
     "count": {
      "!type": "fn(query?: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nCount number of matching documents in the db to a query."
     },
     "drop": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nDrop the collection"
     },
     "findAndModify": {
      "!type": "fn(query: +Object, sort: [?], doc: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nFind and update a document."
     },
     "findAndRemove": {
      "!type": "fn(query: +Object, sort: [?], options?: +Object, callback: fn())",
      "!doc": "\n\nFind and remove a document"
     },
     "find": {
      "!type": "fn(query: +Object, options?: +Object, callback: fn()) -> +cursor.Cursor",
      "!doc": "\n\nCreates a cursor for a query that can be used to iterate over results from MongoDB"
     },
     "findOne": {
      "!type": "fn(query: +Object, options?: +Object, callback: fn()) -> +cursor.Cursor",
      "!doc": "\n\nFinds a single document based on the query"
     },
     "createIndex": {
      "!type": "fn(fieldOrSpec: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nCreates an index on the collection."
     },
     "ensureIndex": {
      "!type": "fn(fieldOrSpec: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nEnsures that an index exists, if it does not it creates it"
     },
     "indexInformation": {
      "!type": "fn(options?: +Object, callback: fn())",
      "!doc": "\n\nRetrieves this collections index info."
     },
     "dropIndex": {
      "!type": "fn(name: string, callback: fn())",
      "!doc": "\n\nDrops an index from this collection."
     },
     "dropAllIndexes": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nDrops all indexes from this collection."
     },
     "reIndex": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nReindex all indexes on the collection\nWarning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections."
     },
     "mapReduce": {
      "!type": "fn(map: fn(), reduce: fn(), options?: ?, callback: fn())",
      "!doc": "\n\nRun Map Reduce across a collection. Be aware that the inline option for out will return an array of results not a collection."
     },
     "group": {
      "!type": "fn(keys: +Object, condition: +Object, initial: +Object, reduce: fn(), finalize: fn(), command: bool, options?: +Object, callback: fn())",
      "!doc": "\n\nRun a group command across a collection"
     },
     "options": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nReturns the options of the collection."
     },
     "isCapped": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nReturns if the collection is a capped collection"
     },
     "indexExists": {
      "!type": "fn(indexNames: string, callback: fn())",
      "!doc": "\n\nChecks if one or more indexes exist on the collection"
     },
     "geoNear": {
      "!type": "fn(x: number, y: number, options?: ?, callback: fn())",
      "!doc": "\n\nExecute the geoNear command to search for items in the collection"
     },
     "geoHaystackSearch": {
      "!type": "fn(x: number, y: number, options?: ?, callback: fn())",
      "!doc": "\n\nExecute a geo search using a geo haystack index on a collection."
     },
     "indexes": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieve all the indexes on the collection."
     },
     "aggregate": {
      "!type": "fn(array: [?], options?: +Object, callback: fn())",
      "!doc": "\n\nExecute an aggregation framework pipeline against the collection, needs MongoDB >= 2.2"
     },
     "stats": {
      "!type": "fn(options?: ?, callback: fn())",
      "!doc": "\n\nGet all the collection statistics."
     },
     "initializeUnorderedBulkOp": {
      "!type": "fn(options?: ?, callback: fn()) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nInitiate a Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order."
     },
     "initializeOrderedBulkOp": {
      "!type": "fn(options?: ?, callback: fn()) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nInitiate an In order bulk write operation, operations will be serially executed in the order they are added, creating a new operation for each switch in types."
     },
     "parallelCollectionScan": {
      "!type": "fn(options?: ?, callback: fn()) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nReturn N number of parallel cursors for a collection allowing parallel reading of entire collection. There are\nno ordering guarantees for returned results."
     }
    }
   }
  },
  "mongoclient": {
   "MongoClient": {
    "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
    "!doc": "\n\nCreate a new MongoClient instance.",
    "prototype": {
     "!proto": "events.EventEmitter.prototype",
     "connect": {
      "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
      "!effects": [
       "custom mongodb_MongoClient_connect"
      ],
      "!doc": "\n\nConnect to MongoDB using a url as documented at"
     },
     "open": {
      "!type": "fn(callback: fn(err: +Error, mongoClient: +mongoclient.MongoClient))",
      "!doc": "\n\nInitialize the database connection."
     },
     "close": {
      "!type": "fn(callback: fn(err: +Error, result: ?))",
      "!doc": "\n\nClose the current db connection, including all the child db instances. Emits close event and calls optional callback."
     },
     "db": {
      "!type": "fn(dbName: string) -> +db.Db",
      "!doc": "\n\nCreate a new Db instance sharing the current socket connections."
     }
    },
    "connect": {
     "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
     "!effects": [
      "custom mongodb_MongoClient_connect"
     ],
     "!doc": "\n\nConnect to MongoDB using a url as documented at"
    }
   }
  },
  "db": {
   "Db": {
    "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
    "!doc": "\n\nCreate a new Db instance.",
    "prototype": {
     "open": {
      "!type": "fn(callback: fn(err: +Error, db: +db.Db))",
      "!doc": "\n\nInitialize the database connection."
     },
     "db": {
      "!type": "fn(dbName: string) -> +db.Db",
      "!doc": "\n\nCreate a new Db instance sharing the current socket connections."
     },
     "close": {
      "!type": "fn(forceClose?: bool, callback: fn())",
      "!doc": "\n\nClose the current db connection, including all the child db instances. Emits close event and calls optional callback."
     },
     "admin": {
      "!type": "fn(callback?: fn()) -> +admin.Admin",
      "!doc": "\n\nAccess the Admin database"
     },
     "collectionsInfo": {
      "!type": "fn(collectionName?: string, callback: fn())",
      "!doc": "\n\nDEPRECATED: Returns a cursor to all the collection information. Does not work with 2.8 or higher when using\nother storage engines"
     },
     "listCollections": {
      "!type": "fn(collectionName?: string, options?: +Object, callback: fn())",
      "!doc": "\n\nGet the list of all collection names for the specified db"
     },
     "collectionNames": {
      "!type": "fn(collectionName?: string, options?: +Object, callback: fn())",
      "!doc": "\n\nGet the list of all collection names for the specified db"
     },
     "collection": {
      "!type": "fn(collectionName: string, options?: +Object, callback: fn())",
      "!doc": "\n\nFetch a specific collection (containing the actual collection information). If the application does not use strict mode you can\ncan use it without a callback in the following way. var collection = db.collection('mycollection');"
     },
     "collections": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nFetch all collections for the current db."
     },
     "eval": {
      "!type": "fn(code: +code.Code, parameters?: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nEvaluate javascript on the server"
     },
     "dereference": {
      "!type": "fn(dbRef: +db_ref.DBRef, callback: fn())",
      "!doc": "\n\nDereference a dbref, against a db"
     },
     "logout": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nLogout user from server, fire off on all connections and remove all auth info"
     },
     "authenticate": {
      "!type": "fn(username: string, password: string, options?: +Object, callback: fn())",
      "!doc": "\n\nAuthenticate a user against the server.\nauthMechanism\nOptions\n - **authMechanism** {String, default:MONGODB-CR}, The authentication mechanism to use, GSSAPI or MONGODB-CR"
     },
     "addUser": {
      "!type": "fn(username: string, password: string, options?: +Object, callback: fn())",
      "!doc": "\n\nAdd a user to the database."
     },
     "removeUser": {
      "!type": "fn(username: string, options?: +Object, callback: fn())",
      "!doc": "\n\nRemove a user from a database"
     },
     "createCollection": {
      "!type": "fn(collectionName: string, options?: +Object, callback: fn(err: +Error, collection: +collection.Collection)))",
      "!effects": [
       "custom mongodb_callback_collection"
      ],
      "!doc": "\n\nCreates a collection on a server pre-allocating space, need to create f.ex capped collections."
     },
     "command": {
      "!type": "fn(selector: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nExecute a command hash against MongoDB. This lets you acess any commands not available through the api on the server."
     },
     "dropCollection": {
      "!type": "fn(collectionName: string, callback: fn())",
      "!doc": "\n\nDrop a collection from the database, removing it permanently. New accesses will create a new collection."
     },
     "renameCollection": {
      "!type": "fn(fromCollection: string, toCollection: string, options?: +Object, callback: fn())",
      "!doc": "\n\nRename a collection."
     },
     "createIndex": {
      "!type": "fn(collectionName: string, fieldOrSpec: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nCreates an index on the collection."
     },
     "ensureIndex": {
      "!type": "fn(collectionName: string, fieldOrSpec: +Object, options?: +Object, callback: fn())",
      "!doc": "\n\nEnsures that an index exists, if it does not it creates it"
     },
     "cursorInfo": {
      "!type": "fn(options?: +Object, callback: fn())",
      "!doc": "\n\nReturns the information available on allocated cursors."
     },
     "dropIndex": {
      "!type": "fn(collectionName: string, indexName: string, callback: fn())",
      "!doc": "\n\nDrop an index on a collection."
     },
     "reIndex": {
      "!type": "fn(collectionName: string, callback: fn())",
      "!doc": "\n\nReindex all indexes on the collection\nWarning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections."
     },
     "indexInformation": {
      "!type": "fn(collectionName: string, options?: +Object, callback: fn())",
      "!doc": "\n\nRetrieves this collections index info."
     },
     "dropDatabase": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nDrop a database."
     },
     "stats": {
      "!type": "fn(options?: ?, callback: fn())",
      "!doc": "\n\nGet all the db statistics."
     }
    },
    "connect": {
     "!type": "fn(url: string, options?: +Object, callback: fn())",
     "!doc": "\n\nConnect to MongoDB using a url as documented at"
    }
   }
  },
  "cursor": {
   "Cursor": {
    "!type": "fn(db: +db.Db, collection: +collection.Collection, selector: +Object, fields: +Object, options?: +Object)",
    "!doc": "\n\nConstructor for a cursor object that handles all the operations on query result\nusing find. This cursor object is unidirectional and cannot traverse backwards. Clients should not be creating a cursor directly,\nbut use find to acquire a cursor. (INTERNAL TYPE)",
    "cloneWithOptions": {
     "!type": "fn(cursor: +cursor.Cursor) -> +Object",
     "!doc": "\n\nClones a given cursor but uses new options"
    },
    "prototype": {
     "rewind": {
      "!type": "fn() -> +cursor.Cursor",
      "!doc": "\n\nResets this cursor to its initial state. All settings like the query string,\ntailable, batchSizeValue, skipValue and limits are preserved."
     },
     "toArray": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nReturns an array of documents. The caller is responsible for making sure that there\nis enough memory to store the results. Note that the array only contain partial\nresults when this cursor had been previouly accessed. In that case,\ncursor.rewind() can be used to reset the cursor."
     },
     "each": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nIterates over all the documents for this cursor. As with **{cursor.toArray}**,\nnot all of the elements will be iterated if this cursor had been previouly accessed.\nIn that case, **{cursor.rewind}** can be used to reset the cursor. However, unlike\n**{cursor.toArray}**, the cursor will only hold a maximum of batch size elements\nat any given time if batch size is specified. Otherwise, the caller is responsible\nfor making sure that the entire result can fit the memory."
     },
     "count": {
      "!type": "fn(applySkipLimit: bool, callback: fn())",
      "!doc": "\n\nDetermines how many result the query for this cursor will return"
     },
     "sort": {
      "!type": "fn(keyOrList: string, direction: string, callback: fn()) -> +cursor.Cursor",
      "!doc": "\n\nSets the sort parameter of this cursor to the given value."
     },
     "limit": {
      "!type": "fn(limit: number, callback?: fn()) -> +cursor.Cursor",
      "!doc": "\n\nSets the limit parameter of this cursor to the given value."
     },
     "maxTimeMS": {
      "!type": "fn(maxTimeMS: number, callback?: fn()) -> +cursor.Cursor",
      "!doc": "\n\nSpecifies a time limit for a query operation. After the specified\ntime is exceeded, the operation will be aborted and an error will be\nreturned to the client. If maxTimeMS is null, no limit is applied."
     },
     "setReadPreference": {
      "!type": "fn(the: string, callback?: fn()) -> +cursor.Cursor",
      "!doc": "\n\nSets the read preference for the cursor"
     },
     "skip": {
      "!type": "fn(skip: number, callback?: fn()) -> +cursor.Cursor",
      "!doc": "\n\nSets the skip parameter of this cursor to the given value."
     },
     "batchSize": {
      "!type": "fn(batchSize: number, callback?: fn()) -> +cursor.Cursor",
      "!doc": "\n\nSets the batch size parameter of this cursor to the given value."
     },
     "nextObject": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nGets the next document from the cursor."
     },
     "explain": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nGets a detailed information about how the query is performed on this cursor and how\nlong it took the database to process it."
     },
     "stream": {
      "!type": "fn() -> +cursorstream.CursorStream",
      "!doc": "\n\nReturns a Node Transform Stream interface for this cursor."
     },
     "close": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nClose the cursor."
     },
     "isClosed": {
      "!type": "fn() -> bool",
      "!doc": "\n\nCheck if the cursor is closed or open."
     }
    }
   }
  },
  "cursorstream": {
   "CursorStream": {
    "!type": "fn(cursor: +cursor.Cursor) -> ?",
    "!doc": "\n\nCursorStream"
   }
  },
  "gridstore": {
   "GridStore": {
    "!type": "fn(db: +db.Db, id?: ?, filename?: string, mode: string, options: +Object) -> +gridstore.GridStore",
    "!doc": "\n\nA class representation of a file stored in GridFS.",
    "prototype": {
     "open": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nOpens the file from the database and initialize this object. Also creates a\nnew one if file does not exist."
     },
     "writeFile": {
      "!type": "fn(file: string, callback: fn())",
      "!doc": "\n\nStores a file from the file system to the GridFS database."
     },
     "close": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nSaves this file to the database. This will overwrite the old entry if it\nalready exists. This will work properly only if mode was initialized to\n\"w\" or \"w+\"."
     },
     "chunkCollection": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieve this file's chunks collection."
     },
     "unlink": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nDeletes all the chunks of this file in the database."
     },
     "collection": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieves the file collection associated with this object."
     },
     "readlines": {
      "!type": "fn(separator?: string, callback: fn())",
      "!doc": "\n\nReads the data of this file."
     },
     "rewind": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nDeletes all the chunks of this file in the database if mode was set to \"w\" or\n\"w+\" and resets the read/write head to the initial position."
     },
     "read": {
      "!type": "fn(length?: number, buffer?: string, callback: fn())",
      "!doc": "\n\nRetrieves the contents of this file and advances the read/write head. Works with Buffers only."
     },
     "tell": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieves the position of the read/write head of this file."
     },
     "seek": {
      "!type": "fn(position?: number, seekLocation?: number, callback: fn())",
      "!doc": "\n\nMoves the read/write head to a new location."
     },
     "eof": {
      "!type": "fn() -> bool",
      "!doc": "\n\nVerify if the file is at EOF."
     },
     "getc": {
      "!type": "fn(callback: fn())",
      "!doc": "\n\nRetrieves a single character from this file."
     },
     "puts": {
      "!type": "fn(string: string, callback: fn())",
      "!doc": "\n\nWrites a string to the file with a newline character appended at the end if\nthe given string does not have one."
     },
     "stream": {
      "!type": "fn(autoclose: bool)",
      "!doc": "\n\nReturns read stream based on this GridStore file"
     },
     "write": {
      "!type": "fn(data: string, close?: bool, callback: fn())",
      "!doc": "\n\nWrites some data. This method will work properly only if initialized with mode \"w\" or \"w+\"."
     }
    },
    "exist": {
     "!type": "fn(db: +db.Db, name: string, rootCollection?: string, callback: fn())",
     "!doc": "\n\nChecks if a file exists in the database."
    },
    "list": {
     "!type": "fn(db: +db.Db, rootCollection?: string, callback: fn())",
     "!doc": "\n\nGets the list of files stored in the GridFS."
    },
    "read": {
     "!type": "fn(db: +db.Db, name: string, length?: number, offset?: number, options?: +Object, callback: fn())",
     "!doc": "\n\nReads the contents of a file."
    },
    "readlines": {
     "!type": "fn(db: +db.Db, name: string, separator?: string, options?: +Object, callback: fn())",
     "!doc": "\n\nReads the data of this file."
    },
    "unlink": {
     "!type": "fn(db: +db.Db, names: string, options?: +Object)",
     "!doc": "\n\nDeletes the chunks and metadata information of a file from GridFS."
    }
   }
  },
  "readstream": {
   "ReadStream": {
    "!type": "fn(autoclose: bool, cursor: +gridstore.GridStore) -> +readstream.ReadStream",
    "!doc": "\n\nReadStream"
   }
  },
  "grid": {
   "Grid": {
    "!type": "fn(db: +db.Db, fsName?: string) -> +grid.Grid",
    "!doc": "\n\nA class representation of a simple Grid interface.",
    "prototype": {
     "put": {
      "!type": "fn(data: ?, options?: +Object, callback: fn())",
      "!doc": "\n\nPuts binary data to the grid"
     },
     "get": {
      "!type": "fn(id: ?, callback: fn())",
      "!doc": "\n\nGet binary data to the grid"
     },
     "delete": {
      "!type": "fn(id: ?, callback: fn())",
      "!doc": "\n\nDelete file from grid"
     }
    }
   }
  },
  "server": {
   "Server": {
    "!type": "fn(host: string, port: number, options?: +Object)",
    "!doc": "\n\nClass representing a single MongoDB Server connection",
    "prototype": {
     "assignReplicaSet": {
      "!type": "fn(replset: +replset.ReplSet)",
      "!doc": "\n\nAssigns a replica set to this <code>server</code>."
     },
     "inheritReplSetOptionsFrom": {
      "!type": "fn(replset: +replset.ReplSet)",
      "!doc": "\n\nTakes needed options from <code>replset</code> and overwrites\nour own options."
     }
    }
   }
  },
  "mongos": {
   "Mongos": {
    "!type": "fn(list: [?], options?: +Object)",
    "!doc": "\n\nMongos constructor provides a connection to a mongos proxy including failover to additional servers"
   }
  },
  "replset": {
   "ReplSet": {
    "!type": "fn(list: [?], options?: +Object)",
    "!doc": "\n\nReplSet constructor provides replicaset functionality",
    "prototype": {
     "createServer": {
      "!type": "fn(host: string, replset: +replset.ReplSet) -> +server.Server",
      "!doc": "\n\nCreates a new server for the <code>replset</code> based on <code>host</code>."
     }
    }
   }
  },
  "readpreference": {
   "ReadPreference": {
    "!type": "fn(the: string, tags: +Object) -> +readpreference.ReadPreference",
    "!doc": "\n\nA class representation of the Read Preference."
   }
  },
  "ordered": {
   "OrderedBulkOperation": {
    "!type": "fn(collection: +Object, options?: +Object) -> +Object",
    "!doc": "\n\nCreate a new OrderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)",
    "prototype": {
     "update": {
      "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nAdd a single update document to the bulk operation"
     },
     "updateOne": {
      "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nAdd a single update one document to the bulk operation"
     },
     "replaceOne": {
      "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nAdd a replace one operation to the bulk operation"
     },
     "upsert": {
      "!type": "fn() -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nUpsert modifier for update bulk operation"
     },
     "removeOne": {
      "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nAdd a remove one operation to the bulk operation"
     },
     "remove": {
      "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nAdd a remove operation to the bulk operation"
     },
     "insert": {
      "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nAdd a single insert document to the bulk operation"
     },
     "find": {
      "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
      "!doc": "\n\nInitiate a find operation for an update/updateOne/remove/removeOne/replaceOne"
     },
     "execute": {
      "!type": "fn(options?: +Object, callback: fn())",
      "!doc": "\n\nExecute the ordered bulk operation"
     }
    }
   }
  },
  "unordered": {
   "UnorderedBulkOperation": {
    "!type": "fn(collection: +Object, options?: +Object) -> +Object",
    "!doc": "\n\nCreate a new UnorderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)",
    "prototype": {
     "update": {
      "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nAdd a single update document to the bulk operation"
     },
     "updateOne": {
      "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nAdd a single update one document to the bulk operation"
     },
     "replaceOne": {
      "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nAdd a replace one operation to the bulk operation"
     },
     "upsert": {
      "!type": "fn() -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nUpsert modifier for update bulk operation"
     },
     "removeOne": {
      "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nAdd a remove one operation to the bulk operation"
     },
     "remove": {
      "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nAdd a remove operation to the bulk operation"
     },
     "insert": {
      "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nAdd a single insert document to the bulk operation"
     },
     "find": {
      "!type": "fn(selector: +Object) -> +unordered.UnorderedBulkOperation",
      "!doc": "\n\nInitiate a find operation for an update/updateOne/remove/removeOne/replaceOne"
     },
     "execute": {
      "!type": "fn(options?: +Object, callback: fn())",
      "!doc": "\n\nExecute the unordered bulk operation"
     }
    }
   }
  },
  "batchwriteresult": {
   "BatchWriteResult": {
    "!type": "fn(batchResult: +Object) -> +batchwriteresult.BatchWriteResult",
    "!doc": "\n\nCreate a new BatchWriteResult instance (INTERNAL TYPE, do not instantiate directly)",
    "prototype": {
     "getUpsertedIds": {
      "!type": "fn() -> [?]",
      "!doc": "\n\nReturn an array of upserted ids"
     },
     "getUpsertedIdAt": {
      "!type": "fn(index: number) -> [?]",
      "!doc": "\n\nReturn the upserted id at position x"
     },
     "getRawResponse": {
      "!type": "fn() -> +Object",
      "!doc": "\n\nReturn raw internal result"
     },
     "hasWriteErrors": {
      "!type": "fn() -> bool",
      "!doc": "\n\nReturns true if the bulk operation contains a write error"
     },
     "getWriteErrorCount": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturns the number of write errors off the bulk operation"
     },
     "getWriteErrorAt": {
      "!type": "fn() -> ?",
      "!doc": "\n\nReturns a specific write error object"
     },
     "getWriteErrors": {
      "!type": "fn() -> [?]",
      "!doc": "\n\nRetrieve all write errors"
     },
     "getLastOp": {
      "!type": "fn() -> [?]",
      "!doc": "\n\nRetrieve lastOp if available"
     },
     "getWriteConcernError": {
      "!type": "fn() -> ?",
      "!doc": "\n\nRetrieve the write concern error if any"
     }
    }
   }
  },
  "objectid": {
   "ObjectID": {
    "!type": "fn(id: string) -> +Object",
    "!doc": "\n\nCreate a new ObjectID instance",
    "prototype": {
     "toHexString": {
      "!type": "fn() -> string",
      "!doc": "\n\nReturn the ObjectID id as a 24 byte hex string representation"
     },
     "equals": {
      "!type": "fn(otherID: +Object) -> ?",
      "!doc": "\n\nCompares the equality of this ObjectID with <code>otherID</code>."
     },
     "getTimestamp": {
      "!type": "fn() -> ?",
      "!doc": "\n\nReturns the generation date (accurate up to the second) that this ID was generated."
     }
    },
    "createFromTime": {
     "!type": "fn(time: number) -> +objectid.ObjectID",
     "!doc": "\n\nCreates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID."
    },
    "createFromHexString": {
     "!type": "fn(hexString: string) -> +objectid.ObjectID",
     "!doc": "\n\nCreates an ObjectID from a hex string representation of an ObjectID."
    },
    "isValid": {
     "!type": "fn() -> bool",
     "!doc": "\n\nChecks if a value is a valid bson ObjectId"
    }
   }
  },
  "binary": {
   "Binary": {
    "!type": "fn(buffer: ?, subType?: number) -> +grid.Grid",
    "!doc": "\n\nA class representation of the BSON Binary type.",
    "prototype": {
     "put": {
      "!type": "fn(byte_value: ?)",
      "!doc": "\n\nUpdates this binary with byte_value."
     },
     "write": {
      "!type": "fn(string: string, offset: number)",
      "!doc": "\n\nWrites a buffer or string to the binary."
     },
     "read": {
      "!type": "fn(position: number, length: number) -> ?",
      "!doc": "\n\nReads **length** bytes starting at **position**."
     },
     "value": {
      "!type": "fn() -> string",
      "!doc": "\n\nReturns the value of this binary as a string."
     },
     "length": {
      "!type": "fn() -> number",
      "!doc": "\n\nLength."
     }
    }
   }
  },
  "code": {
   "Code": {
    "!type": "fn(code: string, scope?: +Object) -> +code.Code",
    "!doc": "\n\nA class representation of the BSON Code type."
   }
  },
  "db_ref": {
   "DBRef": {
    "!type": "fn(namespace: string, oid: +objectid.ObjectID, db?: string) -> +db_ref.DBRef",
    "!doc": "\n\nA class representation of the BSON DBRef type."
   }
  },
  "double": {
   "Double": {
    "!type": "fn(value: number) -> +double.Double",
    "!doc": "\n\nA class representation of the BSON Double type.",
    "prototype": {
     "valueOf": {
      "!type": "fn() -> number",
      "!doc": "\n\nAccess the number value."
     }
    }
   }
  },
  "minkey": {
   "MinKey": {
    "!type": "fn() -> +minkey.MinKey",
    "!doc": "\n\nA class representation of the BSON MinKey type."
   }
  },
  "maxkey": {
   "MaxKey": {
    "!type": "fn() -> +maxkey.MaxKey",
    "!doc": "\n\nA class representation of the BSON MaxKey type."
   }
  },
  "symbol": {
   "Symbol": {
    "!type": "fn(value: string) -> +symbol.Symbol",
    "!doc": "\n\nA class representation of the BSON Symbol type.",
    "prototype": {
     "valueOf": {
      "!type": "fn() -> string",
      "!doc": "\n\nAccess the wrapped string value."
     }
    }
   }
  },
  "timestamp": {
   "Timestamp": {
    "!type": "fn(low: number, high: number)",
    "!doc": "\n\nDefines a Timestamp class for representing a 64-bit two's-complement\ninteger value, which faithfully simulates the behavior of a Java \"Timestamp\". This\nimplementation is derived from TimestampLib in GWT.",
    "prototype": {
     "toInt": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the int value."
     },
     "toNumber": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the Number value."
     },
     "toJSON": {
      "!type": "fn() -> string",
      "!doc": "\n\nReturn the JSON value."
     },
     "toString": {
      "!type": "fn(opt_radix?: number) -> string",
      "!doc": "\n\nReturn the String value."
     },
     "getHighBits": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the high 32-bits value."
     },
     "getLowBits": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the low 32-bits value."
     },
     "getLowBitsUnsigned": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the low unsigned 32-bits value."
     },
     "getNumBitsAbs": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturns the number of bits needed to represent the absolute value of this Timestamp."
     },
     "isZero": {
      "!type": "fn() -> bool",
      "!doc": "\n\nReturn whether this value is zero."
     },
     "isNegative": {
      "!type": "fn() -> bool",
      "!doc": "\n\nReturn whether this value is negative."
     },
     "isOdd": {
      "!type": "fn() -> bool",
      "!doc": "\n\nReturn whether this value is odd."
     },
     "equals": {
      "!type": "fn(other: +timestamp.Timestamp) -> bool",
      "!doc": "\n\nReturn whether this Timestamp equals the other"
     },
     "notEquals": {
      "!type": "fn(other: +timestamp.Timestamp) -> bool",
      "!doc": "\n\nReturn whether this Timestamp does not equal the other."
     },
     "lessThan": {
      "!type": "fn(other: +timestamp.Timestamp) -> bool",
      "!doc": "\n\nReturn whether this Timestamp is less than the other."
     },
     "lessThanOrEqual": {
      "!type": "fn(other: +timestamp.Timestamp) -> bool",
      "!doc": "\n\nReturn whether this Timestamp is less than or equal to the other."
     },
     "greaterThan": {
      "!type": "fn(other: +timestamp.Timestamp) -> bool",
      "!doc": "\n\nReturn whether this Timestamp is greater than the other."
     },
     "greaterThanOrEqual": {
      "!type": "fn(other: +timestamp.Timestamp) -> bool",
      "!doc": "\n\nReturn whether this Timestamp is greater than or equal to the other."
     },
     "compare": {
      "!type": "fn(other: +timestamp.Timestamp) -> bool",
      "!doc": "\n\nCompares this Timestamp with the given one."
     },
     "negate": {
      "!type": "fn() -> +timestamp.Timestamp",
      "!doc": "\n\nThe negation of this value."
     },
     "add": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns the sum of this and the given Timestamp."
     },
     "subtract": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns the difference of this and the given Timestamp."
     },
     "multiply": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns the product of this and the given Timestamp."
     },
     "div": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns this Timestamp divided by the given one."
     },
     "modulo": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns this Timestamp modulo the given one."
     },
     "not": {
      "!type": "fn() -> +timestamp.Timestamp",
      "!doc": "\n\nThe bitwise-NOT of this value."
     },
     "and": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns the bitwise-AND of this Timestamp and the given one."
     },
     "or": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns the bitwise-OR of this Timestamp and the given one."
     },
     "xor": {
      "!type": "fn(other: +timestamp.Timestamp) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns the bitwise-XOR of this Timestamp and the given one."
     },
     "shiftLeft": {
      "!type": "fn(numBits: number) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns this Timestamp with bits shifted to the left by the given amount."
     },
     "shiftRight": {
      "!type": "fn(numBits: number) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns this Timestamp with bits shifted to the right by the given amount."
     },
     "shiftRightUnsigned": {
      "!type": "fn(numBits: number) -> +timestamp.Timestamp",
      "!doc": "\n\nReturns this Timestamp with bits shifted to the right by the given amount, with the new top bits matching the current sign bit."
     }
    },
    "fromInt": {
     "!type": "fn(value: number) -> +timestamp.Timestamp",
     "!doc": "\n\nReturns a Timestamp representing the given (32-bit) integer value."
    },
    "fromNumber": {
     "!type": "fn(value: number) -> +timestamp.Timestamp",
     "!doc": "\n\nReturns a Timestamp representing the given value, provided that it is a finite number. Otherwise, zero is returned."
    },
    "fromBits": {
     "!type": "fn(lowBits: number, highBits: number) -> +timestamp.Timestamp",
     "!doc": "\n\nReturns a Timestamp representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits."
    },
    "fromString": {
     "!type": "fn(str: string, opt_radix: number) -> +timestamp.Timestamp",
     "!doc": "\n\nReturns a Timestamp representation of the given string, written using the given radix."
    }
   }
  },
  "long": {
   "Long": {
    "!type": "fn(low: number, high: number)",
    "!doc": "\n\nDefines a Long class for representing a 64-bit two's-complement\ninteger value, which faithfully simulates the behavior of a Java \"Long\". This\nimplementation is derived from LongLib in GWT.",
    "prototype": {
     "toInt": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the int value."
     },
     "toNumber": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the Number value."
     },
     "toJSON": {
      "!type": "fn() -> string",
      "!doc": "\n\nReturn the JSON value."
     },
     "toString": {
      "!type": "fn(opt_radix?: number) -> string",
      "!doc": "\n\nReturn the String value."
     },
     "getHighBits": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the high 32-bits value."
     },
     "getLowBits": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the low 32-bits value."
     },
     "getLowBitsUnsigned": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturn the low unsigned 32-bits value."
     },
     "getNumBitsAbs": {
      "!type": "fn() -> number",
      "!doc": "\n\nReturns the number of bits needed to represent the absolute value of this Long."
     },
     "isZero": {
      "!type": "fn() -> bool",
      "!doc": "\n\nReturn whether this value is zero."
     },
     "isNegative": {
      "!type": "fn() -> bool",
      "!doc": "\n\nReturn whether this value is negative."
     },
     "isOdd": {
      "!type": "fn() -> bool",
      "!doc": "\n\nReturn whether this value is odd."
     },
     "equals": {
      "!type": "fn(other: +long.Long) -> bool",
      "!doc": "\n\nReturn whether this Long equals the other"
     },
     "notEquals": {
      "!type": "fn(other: +long.Long) -> bool",
      "!doc": "\n\nReturn whether this Long does not equal the other."
     },
     "lessThan": {
      "!type": "fn(other: +long.Long) -> bool",
      "!doc": "\n\nReturn whether this Long is less than the other."
     },
     "lessThanOrEqual": {
      "!type": "fn(other: +long.Long) -> bool",
      "!doc": "\n\nReturn whether this Long is less than or equal to the other."
     },
     "greaterThan": {
      "!type": "fn(other: +long.Long) -> bool",
      "!doc": "\n\nReturn whether this Long is greater than the other."
     },
     "greaterThanOrEqual": {
      "!type": "fn(other: +long.Long) -> bool",
      "!doc": "\n\nReturn whether this Long is greater than or equal to the other."
     },
     "compare": {
      "!type": "fn(other: +long.Long) -> bool",
      "!doc": "\n\nCompares this Long with the given one."
     },
     "negate": {
      "!type": "fn() -> +long.Long",
      "!doc": "\n\nThe negation of this value."
     },
     "add": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns the sum of this and the given Long."
     },
     "subtract": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns the difference of this and the given Long."
     },
     "multiply": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns the product of this and the given Long."
     },
     "div": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns this Long divided by the given one."
     },
     "modulo": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns this Long modulo the given one."
     },
     "not": {
      "!type": "fn() -> +long.Long",
      "!doc": "\n\nThe bitwise-NOT of this value."
     },
     "and": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns the bitwise-AND of this Long and the given one."
     },
     "or": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns the bitwise-OR of this Long and the given one."
     },
     "xor": {
      "!type": "fn(other: +long.Long) -> +long.Long",
      "!doc": "\n\nReturns the bitwise-XOR of this Long and the given one."
     },
     "shiftLeft": {
      "!type": "fn(numBits: number) -> +long.Long",
      "!doc": "\n\nReturns this Long with bits shifted to the left by the given amount."
     },
     "shiftRight": {
      "!type": "fn(numBits: number) -> +long.Long",
      "!doc": "\n\nReturns this Long with bits shifted to the right by the given amount."
     },
     "shiftRightUnsigned": {
      "!type": "fn(numBits: number) -> +long.Long",
      "!doc": "\n\nReturns this Long with bits shifted to the right by the given amount, with the new top bits matching the current sign bit."
     }
    },
    "fromInt": {
     "!type": "fn(value: number) -> +long.Long",
     "!doc": "\n\nReturns a Long representing the given (32-bit) integer value."
    },
    "fromNumber": {
     "!type": "fn(value: number) -> +long.Long",
     "!doc": "\n\nReturns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned."
    },
    "fromBits": {
     "!type": "fn(lowBits: number, highBits: number) -> +long.Long",
     "!doc": "\n\nReturns a Long representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits."
    },
    "fromString": {
     "!type": "fn(str: string, opt_radix: number) -> +long.Long",
     "!doc": "\n\nReturns a Long representation of the given string, written using the given radix."
    }
   }
  },
  "bson": {
   "BSON": {
    "!type": "fn() -> +bson.BSON",
    "!doc": "\n\nCreate a new BSON instance",
    "calculateObjectSize": {
     "!type": "fn(object: +Object, serializeFunctions?: bool) -> number",
     "!doc": "\n\nCalculate the bson size for a passed in Javascript object."
    },
    "serializeWithBufferAndIndex": {
     "!type": "fn(object: +Object, checkKeys: bool, buffer: ?, index: number, serializeFunctions: bool) -> number",
     "!doc": "\n\nSerialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization."
    },
    "serialize": {
     "!type": "fn(object: +Object, checkKeys: bool, asBuffer: bool, serializeFunctions: bool) -> ?",
     "!doc": "\n\nSerialize a Javascript object."
    },
    "deserializeStream": {
     "!type": "fn(data: ?, startIndex: number, numberOfDocuments: number, documents: [?], docStartIndex: number, options?: +Object) -> number",
     "!doc": "\n\nDeserialize stream data as BSON documents."
    },
    "deserialize": {
     "!type": "fn(buffer: ?, options?: +Object, isArray?: bool) -> +Object",
     "!doc": "\n\nDeserialize data as BSON."
    },
    "prototype": {
     "deserialize": {
      "!type": "fn(buffer: ?, options?: +Object, isArray?: bool) -> +Object",
      "!doc": "\n\nDeserialize data as BSON."
     },
     "deserializeStream": {
      "!type": "fn(data: ?, startIndex: number, numberOfDocuments: number, documents: [?], docStartIndex: number, options?: +Object) -> number",
      "!doc": "\n\nDeserialize stream data as BSON documents."
     },
     "serialize": {
      "!type": "fn(object: +Object, checkKeys: bool, asBuffer: bool, serializeFunctions: bool) -> ?",
      "!doc": "\n\nSerialize a Javascript object."
     },
     "calculateObjectSize": {
      "!type": "fn(object: +Object, serializeFunctions?: bool) -> number",
      "!doc": "\n\nCalculate the bson size for a passed in Javascript object."
     },
     "serializeWithBufferAndIndex": {
      "!type": "fn(object: +Object, checkKeys: bool, buffer: ?, index: number, serializeFunctions: bool) -> number",
      "!doc": "\n\nSerialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization."
     }
    }
   }
  }
 }
};
    
})