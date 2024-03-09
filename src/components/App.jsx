import Profile from './Profile/Profile';
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import './App.css';


const App = () => {
  return (
    <>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;