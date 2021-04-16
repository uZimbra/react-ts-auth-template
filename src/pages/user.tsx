import { useHistory } from "react-router"
import { userLogout } from "../services/authentication"

function User() {
  const routes = useHistory();

  function handleLogout() {
    userLogout();
    
    routes.replace('/');
  }

  return (
    <div>
      <p>This route is private!</p>
      <button
        onClick={handleLogout}
      >
        exit
      </button>
    </div>
  )
}

export default User;