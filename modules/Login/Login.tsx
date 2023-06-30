"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
};

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onLogin: SubmitHandler<Inputs> = data => {
        console.log(data);
    };

    return (
        <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row gy-5 row--30 justify-content-center">
                    <div className="col-lg-6">
                        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                            <h3 className="title">Login</h3>
                            <form onSubmit={handleSubmit(onLogin)} className="max-width-auto">

                                <div className="form-group">
                                    <input
                                        aria-invalid={errors.email ? "true" : "false"}
                                        id="email"
                                        type="email"
                                        autoComplete='off'
                                        {...register("email", {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: 'Invalid email address'
                                            }
                                        })
                                        }
                                    />
                                    <label htmlFor="email">Email address *</label>
                                    {errors.email && <span className="text-danger">{errors.email?.message}</span>}
                                    {/* <span className="focus-border" /> */}
                                </div>



                                <div className="form-group">
                                    <input
                                        id='password'
                                        autoComplete='off'
                                        type="password"
                                        {...register("password", {
                                            required: 'Password is required',
                                            minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                            maxLength: { value: 20, message: 'Password must not be greater than 20 characters' }
                                        })
                                        }
                                    />
                                    <label htmlFor="password">Password *</label>
                                    {errors.password && <span className="text-danger">{errors.password?.message}</span>}
                                </div>


                                <div className="form-submit-group">
                                    <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Login</span>
                                            <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                            <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                            <p className="b3 text-center mt--30">Doesn&apos;t have an account? <Link className="rbt-btn-link" href='/register'>register here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;