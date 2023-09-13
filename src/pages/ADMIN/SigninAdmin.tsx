
import pic from '../../assets/undraw_Redesign_feedback_re_jvm0.png';
import pics from '../../assets/undraw_Programmer_re_owql.png';
import img from "../../assets/trello-logo-blue.svg"

const SigninAdmin = () => {
 
  return (
    <div className="flex h-screen">
      <div className="flex-none w-[600px]  relative">
        <div className="absolute bottom-0 left-0 right-0">
          <div>
            
          </div>
          <img src={pic} alt="Image 1" className="w-full" />
        </div>
      </div>
      <div className="flex-1 flex-col justify-center items-center flex  relative">
        <div>
        <img src={img} className="w-full" />

        </div>
        <div className="h-[400px] w-[400px]  rounded-[40px] items-center flex flex-col p-8">
          <div className="h-[400px] w-[400px] bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 opacity-95 z-[-7] rounded-[40px] items-center flex flex-col shadow-lg p-8">

          <div className="font-bold text-2xl text-gray-400 mt-7">Log in to Trello</div>

         
        <div className='mt-8s'>
          
          <input
           type='Email'
           placeholder='Email'
            className="w-full border rounded-lg px-3 py-2 mt-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 mt-2"
          />
         
        </div>
         
         
          
          <button
                  className="py-2 px-8 mt-7 bg-blue-950 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all "
                  type="submit"
                >
                  Register
                </button>
              
              <div className="my-4">
                <hr />
              </div>
              <div className="mt-4">
                <div className="flex flex-col items-center text-sm">
                  <div>Dont have an account?</div>
                  <span className="font-bold text-purple-500 hover:cursor-pointer transition-all">
                    Sign up here
                  </span>
                </div>
              </div>
          {/* Add more input fields as needed */}
        </div>
          </div>
                </div>
      <div className="flex-none w-[600px]  relative">
        <div className="absolute bottom-0 left-0 right-0">
          <img src={pics} alt="Image 2" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SigninAdmin;
