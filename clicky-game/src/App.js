import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => {
  
  const friendList = friends.map ( friend => 
    <FriendCard
      name={friend.name}
      image={friend.image}
      occupation={friend.occupation}
      location={friend.location}
    /> )

  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friendList}
    </Wrapper>
  );
}

export default App;
