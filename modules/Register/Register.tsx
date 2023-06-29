"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    email: string,
    username: string,
    password: string,
    confirmPassword: string
};

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onRegister: SubmitHandler<Inputs> = data => {
        console.log(data);
    };

    return (
        <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row gy-5 row--30 justify-content-center">
                    <div className="col-lg-8">
                        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                            <h3 className="title">Register</h3>
                            <form onSubmit={handleSubmit(onRegister)} className="max-width-auto">

                                <div className="form-group">
                                    <input
                                        aria-invalid={errors.email ? "true" : "false"}
                                        id="email"
                                        type="email"
                                        autoComplete='off'
                                        {...register("email", {
                                            required: 'Email is required',
                                            pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Invalid email address' }
                                        })
                                        }
                                    />
                                    <label htmlFor="email">Email address *</label>
                                    {errors.email && <span className="text-danger">{errors.email?.message}</span>}
                                    {/* <span className="focus-border" /> */}
                                </div>

                                <div className="form-group">
                                    <input
                                        aria-invalid={errors.username ? "true" : "false"}
                                        autoComplete='off'
                                        type="number"
                                        id="username"
                                        {...register("username", {
                                            required: 'Registration No. is required',
                                            maxLength: { value: 30, message: 'Registration No. must not be greater than 30 characters' }
                                        })
                                        }
                                    />
                                    <label htmlFor="username">Registration No. *</label>
                                    {errors.username && <span className="text-danger">{errors.username?.message}</span>}
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

                                <div className="form-group">
                                    <input id="confirmPassword" type="password"
                                        {...register("confirmPassword", {
                                            required: 'Confirm Password is required',
                                            validate: (value) => {
                                                return value === watch('password') || "Passwords don't match.";
                                            },
                                            deps: ['password']
                                        })
                                        }
                                    />
                                    <label htmlFor="confirmPassword">Confirm Password *</label>
                                    {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword?.message}</span>}
                                </div>
                                <div className="form-submit-group">
                                    <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Register</span>
                                            <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                            <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register