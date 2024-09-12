import axios from 'axios';

const Home = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const res = await axios.post('/api/user/create', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('🚀 ~ handleSubmit ~ res:', res);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border-2"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="password">Enter your password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="border"
            autoComplete="password"
          />
        </div>
        <div>
          <input type="submit" value="Submit!" />
        </div>
      </form>
    </div>
  );
};

export const Component = Home;
export default Home;
