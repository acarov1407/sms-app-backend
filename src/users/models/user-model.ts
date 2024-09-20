
export class User {
    constructor(
        public id: string,
        public username: string,
        public phone: string,
        public photoURL: string,
        public createdAt: number
    ) { }

    static fromFirestore(snapshot: FirebaseFirestore.DocumentSnapshot): User {
        const data = snapshot.data();
        return new User(
            snapshot.id,
            data?.username,
            data?.phone,
            data?.photoURL,
            data?.createdAt
        );
    }

    toFirestore() {
        return {
            username: this.username,
            phone: this.phone,
            photoURL: this.photoURL,
            createdAt: this.createdAt,
        };
    }
}