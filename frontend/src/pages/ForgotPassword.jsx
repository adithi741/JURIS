function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex justify-center items-center">

      <div className="bg-white/5 p-10 rounded-3xl w-[500px]">

        <h1 className="text-4xl font-bold mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full bg-white/10 p-4 rounded-xl mb-6"
        />

        <button className="w-full bg-blue-500 py-4 rounded-xl">
          Send Reset Link
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;