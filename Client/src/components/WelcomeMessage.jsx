import { useSpring, animated } from "@react-spring/web";

const WelcomeMessage = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-4">
      <animated.h1
        style={springProps}
        className="text-4xl md:text-6xl font-bold text-center my-4"
      >
        <span className="ml-1 mr-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500 dark:from-violet-500 dark:via-pink-500 dark:to-red-500">
          Welcome to Khabari
        </span>
      </animated.h1>
      <animated.p
        style={springProps}
        className="text-xl md:text-2xl text-center w-11/12 md:w-8/12 mb-8"
      >
        Explore the latest news and updates
      </animated.p>
    </div>
  );
};

export default WelcomeMessage;
