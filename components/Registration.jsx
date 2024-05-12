import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/Users";

const Registration = () => {

    const addUsers = async (formData) => {
        "use server";

        const name = formData.get('name');
        const email = formData.get('email');

        const userData = {
            name,
            email,
        }

        await connectMongo();

        // Inster into Database

        await new User(userData).save();
    }

    return (
        <form class="w-full max-w-sm mb-8" action={addUsers}>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="name" placeholder="Maohib Khan" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">
                        Email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" name="email" placeholder="example@example.com" />
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Registration;