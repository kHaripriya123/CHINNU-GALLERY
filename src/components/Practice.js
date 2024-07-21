const MyComponent = ({isLoggedIn , isAdmin}) => {

    return (

        <div>
{isLoggedIn ? (
    isAdmin ? (
        <h1>welocme admin</h1>
    ): (
        <h1>welocme user</h1>
    )
) : (
    <h1>please log in!</h1>
)}
       
        </div>
    )
}

export default MyComponent;