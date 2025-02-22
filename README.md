# GovTech Careers & Skills Passport OA

## Case Study 1

### Possible Issues
1. **Rendering:** Since we are pointing to the same object in memory, React will not detect a change, and will hence not re-render the component, hence the issue presented by the case study. Here, we create a new `User` and update it as such, trigger a re-render.
2. **Performance:** We could also explore using `useCallback`, allowing React to memoise the function, saving us on re-renders of the function e.g. 
```jsx
const updateAge = React.useCallback(() => {
    setUser(user => ({ ...user, age: 26 }));
}, []);
```
This would be especially useful if we needed to pass this function to child components or performing async operations in `useEffect`. However, for the current case study, it is encapsulated within this component and the current code would be sufficient.

### Improved Version
```jsx
const UserComponent = () => {
    const [user, setUser] = React.useState({ name: 'John', age: 25 });
      
      const updateAge = () => {
        setUser({...user, age: 26})
      };
    
      return (
        <div>
          <h1>User Info</h1>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <button onClick={updateAge}>Update Age</button>
        </div>
      );
    };
    
    ReactDOM.render(<UserComponent />, document.getElementById('root'));
```

## Case Study 2

### Identified Issues
1. **Rendering:** Similar to Case Study 1, except now we extend it to an array of users, changing the reference to memory (by creating a new object) to trigger the re-render.
2. **Performance:** Similar to Case Study 1, except we are making use of the latest state in `prevUsers`  e.g. 
```jsx
 const updateUser = React.useCallback((id, newName) => {
  setUsers(prevUsers =>
    prevUsers.map(user =>
      user.id === id ? { ...user, name: newName } : user
    )
  );
}, []);
```

### Improved Version
```jsx
const UserList = () => {
 const [users, setUsers] = React.useState([
   { id: 1, name: 'John' },
   { id: 2, name: 'Jane' }
 ]);
 
 const updateUser = (id, newName) => {
   const updatedUsers = users.map(user => 
        user.id === id ? {...user, name: newName} : user
    )
    setUsers(updatedUsers)
 };

 return (
   <div>
     <h1>Users</h1>
     {users.map(user => (
       <div key={user.id}>
         <p>{user.name}</p>
         <input 
           value={user.name}
           onChange={(e) => updateUser(user.id, e.target.value)}
           placeholder="New name"
         />
       </div>
     ))}
   </div>
 );
};

ReactDOM.render(<UserList />, document.getElementById('root'));
``

## Case Study 3

```bash
cd namelist-web-app
```

First, download the dependencies:

```bash
npm install

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.