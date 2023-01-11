import UserFinder from "./components/UserFinder"
import UsersContext from "./context/users-context"

function App() {
	return (
		<UsersContext.Provider>
			<UserFinder />
		</UsersContext.Provider>
	)
}

export default App
