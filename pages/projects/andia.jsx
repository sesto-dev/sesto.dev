import Image from 'next/image'
import Container from '../../components/Container'
import Code from '../../components/Code'
import InlineCode from '../../components/InlineCode'

export default function Page() {
    return (
        <Container
            title="Andia"
            canonical="https://accretence.com/projects/andia"
            description="Personal Portfolio of Amirhossein Mohammadi"
            image="https://i.imgur.com/rqUGy7D.jpg"
        >
            <div className="mt-8 p-12 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <Image
                    src="https://i.imgur.com/rqUGy7D.jpg"
                    className="rounded-md"
                    style={{ maxHeight: 400, objectFit: 'cover' }}
                    alt="Blog Post Cover"
                    width="1080"
                    height="100"
                />
                <h2 className="text-2xl my-8">Introduction to Discord Bots</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    Discord is a popular communication platform for online
                    communities and gamers, and it has a thriving ecosystem of
                    bots that can enhance the user experience. These bots can
                    perform a variety of tasks, from playing music and games to
                    providing useful information and tools. One of the most
                    popular uses for Discord bots is to play music within a
                    server. Bots like Rythm and FredBoat allow users to play
                    music from a variety of sources, including YouTube, Spotify,
                    and SoundCloud. They also provide features like lyrics and
                    queue management, making them an easy and convenient way to
                    listen to music with friends. Another popular use case for
                    Discord bots is to provide useful information and tools. For
                    example, bots like TriviaBot can host trivia games, while
                    bots like WeatherBot can provide current weather
                    information. Some bots, like MEE6 and Tatsumaki, also have
                    leveling and reward systems, allowing users to earn points
                    and level up based on their activity within the server.
                    Discord bots can also be used for moderation and
                    administrative tasks. Bots like Dyno and Carl-bot can
                    perform a variety of tasks, such as managing roles, banning
                    users, and enforcing server rules. This can save server
                    administrators a lot of time and effort, as they can
                    automate many of the tasks that would otherwise need to be
                    done manually.
                </p>
                <p className="my-4 text-neutral-700 dark:text-neutral-300">
                    Innovative use cases for Discord bots are constantly being
                    developed, and the possibilities are endless. Some examples
                    include: Language bots that can translate text from one
                    language to another. Virtual assistants that can help users
                    schedule appointments, set reminders, and more. Bots that
                    can help users with mental health and self-care, such as
                    providing meditation exercises or journal prompts. Bots that
                    can help users learn new languages, by providing practice
                    exercises and flashcards. Bots that can help users with
                    their finances, by providing budgeting tools and investment
                    advice. In conclusion, Discord bots are powerful tools that
                    can enhance the user experience on the platform in many
                    ways, from playing music and games to providing useful
                    information and tools. As developers continue to create new
                    and innovative bots, the possibilities for how they can be
                    used are endless. Whether you're a server administrator, a
                    gamer, or just someone looking for a way to enhance your
                    Discord experience, there's likely a bot out there that can
                    help.
                </p>
                <a
                    href="https://github.com/accretence/andia"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-full border p-6 my-6 border-neutral-200 rounded-lg dark:border-neutral-700 dark:hover:border-white hover:border-black transition-all duration-300">
                        <h2 className="text-xl mb-2">
                            github.com / accretence / andia
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Discord v14 bot with parallel Express.js Server,
                            built with Typescript and Prisma
                        </p>
                    </div>
                </a>
                <h2 className="text-2xl my-4">
                    Setting up a Discord V14 Typescript Bot
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    Setting up a TypeScript Discord bot involves several steps:
                    First, you will need to create a new Discord bot. You can do
                    this by visiting the Discord Developer Portal and creating a
                    new application. Once your application is created, navigate
                    to the "Bot" section and create a new bot. You will then be
                    presented with a token, which you will use to authenticate
                    your bot with the Discord API. Next, you will need to
                    install Node.js and npm (Node Package Manager) on your
                    computer. These can be downloaded from the official Node.js
                    website. After Node.js and npm are installed, you can create
                    a new directory for your bot and navigate to it in your
                    terminal. Run the command <InlineCode>npm init</InlineCode>
                    to initialize a new npm project, and follow the prompts to
                    set up your package.json file. Now, you will need to install
                    the necessary packages for your bot. These include the
                    Discord.js library, which allows you to interact with the
                    Discord API, and the TypeScript compiler. You can install
                    these packages by running the following commands in your
                    terminal:
                    <Code>npm install --save discord.js</Code>
                    <Code>npm install --save-dev typescript</Code>
                    Once the packages are installed, you will need to set up
                    your TypeScript configuration file. This file, called
                    <InlineCode>tsconfig.json</InlineCode>, tells the TypeScript
                    compiler how to build your project. You can create this file
                    by running the command <InlineCode>tsc --init</InlineCode>{' '}
                    in your terminal. In your{' '}
                    <InlineCode>tsconfig.json</InlineCode> file, you will need
                    to set the "target" to "es6" and the "module" to "commonjs".
                    This will ensure that your code is transpiled to the correct
                    version of JavaScript for Node.js. Now, you can create a new
                    file called "index.ts" in your project directory. This will
                    be the main file for your bot. In this file, you will need
                    to import the necessary modules from the Discord.js library,
                    as well as any other modules you may need for your bot. To
                    authenticate your bot with the Discord API, you will need to
                    use the token you obtained from the Discord Developer Portal
                    in step 1. You can do this by passing the token to the
                    <InlineCode>client.login()</InlineCode> method, like so:
                    <Code>client.login("YOUR_TOKEN_HERE")</Code>
                    Next, you can set up event handlers for your bot. These
                    event handlers will be called when certain events occur,
                    such as when a user sends a message or when a user joins a
                    voice channel. Finally, you can write the logic for your bot
                    in the event handlers. This can include commands that users
                    can run, as well as any other functionality you want your
                    bot to have. To start the bot, run tsc and then node
                    dist/index.js in the terminal, this will transpile your
                    typescript code to javascript and execute it with node.js
                    You can test your bot by inviting it to a Discord server and
                    interacting with it in the server. Note that this is just a
                    basic tutorial and there are many more things you can do
                    with a Discord bot written in TypeScript, like using a
                    framework or using decorators for better handling events and
                    commands.
                </p>
            </div>
        </Container>
    )
}