function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }   
};

const user = {
    name: 'Vittorio',
    age: 47,
    location: 'Gessate'
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
