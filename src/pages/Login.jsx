import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-lg  mx-auto shrink-0 shadow-2xl rounded-none">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-xl font-semibold text-center my-4">Login User</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center pb-8">Do not have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;