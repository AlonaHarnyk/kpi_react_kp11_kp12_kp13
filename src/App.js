import { data } from "./data/data";
import { User } from "./components/User/User";
import { Section } from "./components/Section/Section";
import { Users } from "./components/Users/Users";

console.log(data);

const App = () => {
  return (
    <div>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title="List of users">
        <Users users={data} />
      </Section>
    </div>
  );
};

export default App;
