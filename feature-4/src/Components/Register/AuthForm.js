import {Link} from 'react-router-dom';

export default function AuthForm({user, isLogin, onChange, onSubmit }) {
    return (
        <div>
        <h1 className="pageHeader">Sign Up</h1>
        <form method="GET" onSubmit={onSubmit}>
            <div className="loginInput">
            <label>Username</label>
            <input type="text" value={user.username}
                onChange={onChange} />
            </div>
            <div className="loginInput">
            <label>Email</label>
            <input type="email" value={user.email}
                onChange={onChange} />
            </div>
            <div className="loginInput">
            <label>First Name</label>
            <input type="text" value={user.firstName}
                onChange={onChange} />
            </div>
            <div className="loginInput">
            <label>Last Name</label>
            <input type="text" value={user.lastName}
                onChange={onChange} />
            </div>
            <div className="loginInput">
            <label>Password</label>
            <input type="password" value={user.password}
                onChange={onChange} />
            <br />
            </div>
            <div className="loginInput">
            <input className="loginSubmit" type="submit" value="Create Account" />
            </div>
        </form>
        <p className="registerLink">Already have an account? <Link to="/login">Click Here to Login</Link></p>
    </div>
    );
}