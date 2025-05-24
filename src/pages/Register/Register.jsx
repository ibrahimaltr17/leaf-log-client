import React, { use } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import google from '../../assets/google.png'
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser } = use(AuthContext);
    console.log(createUser)

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const {email,password, ...userProfile}= Object.fromEntries(formData.entries())
        console.log(email, password, userProfile);

        createUser(email, password, userProfile)
            .then(result => {
                console.log(result.user)

                fetch('https://server-leaf-log.vercel.app/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                .then(res=> res.json())
                .then(data=> {
                    console.log("after profile save", data)
                    if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account is created.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className='bg-green-900 h-screen lg:flex'>
                <div className='w-5/12 hidden lg:block h-screen px-5 text-white text-center'>
                    <div className='lg:flex h-full flex-col items-center justify-center'>
                        <h1 className='text-5xl font-bold text-center my-auto'>Join us today! It only takes a few seconds.</h1>
                    </div>
                </div>
                <div className='text-white lg:text-black lg:bg-white rounded-l-2xl h-screen w-full lg:w-7/12 flex justify-center items-center '>
                    <div>
                        <h3 className='hidden md:block lg:hidden text-2xl font-bold max-w-[320px] text-center my-4'>Welcome back! </h3>
                        <div>
                            <h3 className='text-2xl font-bold lg:text-3xl text-center my-3'>Register Now</h3>
                        </div>
                        <div className='min-w-[320px]'>
                            <form onSubmit={handleSignUp} className=''>
                                {/* Name */}
                                <label className="label">Name</label><br />
                                <input type="text" name='name' className="input" placeholder="Name" required /><br />
                                {/* Email */}
                                <label className="label">Email</label><br />
                                <input type="email" name='email' className="input" placeholder="Email" required /><br />
                                {/* Photo URL */}
                                <label className="label">Photo URL</label><br />
                                <input type="text" name='photo' className="input" placeholder="URL" /><br />
                                {/* Password */}
                                <label className="label validator">Password</label><br />
                                <div className='relative '>
                                    <input
                                        // type={showPassword ? 'text' : 'password'}
                                        type='password'
                                        name='password'
                                        className="input w-full"
                                        placeholder="Password"
                                        minlength="6"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                        title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                                        required /><br />
                                    <button
                                        // onClick={() => setShowPassword(!showPassword)}
                                        className='absolute top-3 right-2 cursor-pointer'
                                        aria-label="Toggle Password Visibility">
                                        <FaEye />

                                        {/* {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        } */}
                                    </button>
                                </div>
                                <p className="validator-hint hidden">
                                    Must be more than 8 characters, including
                                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                                </p>
                                {/* Submit Button */}
                                <div>
                                    <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                                </div>
                            </form>
                            <p className='mt-3'>
                                Already have an account?
                                {/* <Link to="/login" className='text-blue-500'> Login</Link> */}
                            </p>

                            <div className="divider text-white lg:text-black">OR</div>
                            <div

                                className='flex justify-center rounded-md gap-1.5 cursor-pointer p-1 bg-gray-100'
                            >
                                <img src={google} alt="Google logo" className='w-5' />
                                <p className='text-black'>Sign in with Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;