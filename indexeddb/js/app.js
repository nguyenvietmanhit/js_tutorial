(function(){

    if (!window.indexedDB) {
        console.log(`Your browser doesn't support IndexedDB`);
        return;
    }

    const request = indexedDB.open('CRMabc', 1);
    console.log(request)

    request.onerror = (event) => {
        console.log(`Database error: ${event.target.errorCode}`)
    }
    request.onsuccess = (event) => {
        console.log(`Connection success`)
        const db = event.target.result;
        insertContact(db, {
            email: 'manhnv@gmail.com',
            firstName: 'manh',
            lastName: 'nguyen viet'
        })

        insertContact(db, {
            email: 'manhnv11@gmail.com',
            firstName: 'manh11',
            lastName: 'nguyen viet11'
        })

        insertContact(db, {
            email: 'manhnv33@gmail.com',
            firstName: 'manh11',
            lastName: 'nguyen viet11'
        })

        getContactById(db, 1);

        getContactByEmail(db, "manhnv33@gmail.com"	);

        getAllContacts(db);

        deleteContact(db, 1)
    }

    // trigger khi version DB thay doi
    request.onupgradeneeded = (event) => {
        let db = event.target.result;
        console.log(db)
        console.log('onupgradeneeded')
        // object store = table cua DB relation
        let store = db.createObjectStore('Contacts', {
            autoIncrement: true
        });

        // index = filed cua db relation
        let index = store.createIndex('email', 'email', {
            unique: true
        })
    }

    function insertContact(db, contact) {
        const txn = db.transaction('Contacts', 'readwrite');
        const store = txn.objectStore('Contacts');
        let query = store.put(contact);

        query.onsuccess = (event) => {
            console.log(event);
        }
        query.onerror = (event) => {
            console.log(event.target.errorCode)
        }

        txn.oncomplete = () => {
            db.close();
        }
    }

    function getContactById(db, id) {
        const txn = db.transaction('Contacts', 'readonly');
        const store = txn.objectStore('Contacts');
        let query = store.get(id);
        // luon luon check success hay error vi cac thao tac la async
        query.onsuccess = (event) => {
            if (!event.target.result) {
                console.log(`The contact with ${id} not found`);
            } else {
                console.table(event.target.result);
            }
        }
        query.onerror = (event) => {
            console.log(event.target.errorCode);
        }

        txn.oncomplete = () => {
            db.close();
        }
    }

    function getContactByEmail(db, email) {
        const txn = db.transaction('Contacts', "readonly");
        const store = txn.objectStore('Contacts');
        const index = store.index('email');
        let query = index.get(email);

        query.onsuccess = event => {
            console.log(query)
            console.table(query.result)
        }

        query.onerror = event => {
            console.log(event.target.errorCode)
        }

        txn.oncomplete = () => {
            db.close();
        }
    }

    function getAllContacts(db) {
        const txn = db.transaction('Contacts', "readonly");
        const objectStore = txn.objectStore('Contacts');

        objectStore.openCursor().onsuccess = event => {
            let cursor = event.target.result;
            console.log(cursor)
            if (cursor) {
                let contact = cursor.value;
                console.log(contact);
                cursor.continue();
            }
        }

        txn.oncomplete = () => {
            db.close();
        }
    }

    function deleteContact(db, id) {
        const txn = db.transaction('Contacts', 'readwrite');
        const store = txn.objectStore('Contacts');
        let query = store.delete(id);

        query.onsuccess = event => {
            console.log(event)
        }

        query.onerror = event => {
            console.log(event.target.errorCode);
        }

        txn.oncomplete = () => {
            db.close()
        }
    }

})();

