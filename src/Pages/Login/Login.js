import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import googleimg from '../../assets/web/google.png'
import facebookIMg from '../../assets/web/facebook.png'
import githubImg from '../../assets/web/github.png'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { loginUser, providerLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const faceBookProvider = new FacebookAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        loginUser(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user?.email
                }
                console.log(currentUser)
                // navigate('/')
                alert('Login SuccessFully')



                //get JWT token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        //local store in not best place to store token but it is easy.
                        localStorage.setItem('genius-token', data.token)
                        navigate(from, { replace: true })
                    })





            })
            .catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
                alert('Login SuccessFully')
            })
            .catch(error => console.error(error))
    }


    const handleGithubLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
                alert('Login SuccessFully')
            })
            .catch(error => console.error(error))
    }


    const handleFaceBookLogin = () => {
        providerLogin(faceBookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
                alert('Login SuccessFully')
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <h2 className='pb-4 text-xl'>Login with</h2>
                        <div className='flex justify-around py-4'>
                            {/* <Link className='text-3xl'><FaGoogle></FaGoogle></Link>
                            <Link className='text-3xl'><FaGithub></FaGithub></Link>
                            <Link className='text-3xl'><FaFacebook></FaFacebook></Link> */}
                            <Link onClick={handleGoogleLogin}><img className='w-8 h-8' src={googleimg} alt="" /></Link>
                            <Link onClick={handleFaceBookLogin}><img className='w-8 h-8' src={facebookIMg} alt="" /></Link>
                            <Link onClick={handleGithubLogin}> <img className='w-8 h-8' src={githubImg} alt="" /></Link>

                        </div>
                    </div>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-500 font-bold' to={'/signup'}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;