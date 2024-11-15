
const Login = () => {
    return (
        <div className="">
            <div className="card bg-base-100 w-full max-w-lg  mx-auto shrink-0 shadow-2xl rounded-none">
                <form className="card-body">
                    <h2 className="text-xl font-semibold text-center my-4">Login User</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;