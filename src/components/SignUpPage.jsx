import { useState } from "react";

const SignUpPage = ({user}) => {
    
    
    
    const Submit = () => {
        
    }


    return (

        <div className="Form-control">
            <input type="text" name="First name" id="" onChange={(e) => {
                this.setUser({Firstname: e.target.value})
            }}/>
            <input type="text" name="Middle name" id="" onChange={(e) => {
                this.setUser({Middlename: e.target.value})
            }}/>
            <input type="text" name="Last name" id="" onChange={(e) => {
                this.setUser({Lastname: e.target.value})
            }}/>
            <select name="Tier" id="Tier" onChange={(e) => {
                this.setUser({Tier:e.target.value})
            }}>
                <option value="Tier">Tier</option>
                <option value="Tier 1">Tier 1: 10,000</option>
                <option value="Tier 2">Tier 2: 20,000</option>
                <option value="Tier 3">Tier 3: 30,000</option>
            </select>
            <a name="" id="" class="btn btn-primary" href="#" role="button" onSubmit={Submit}>Submit</a>
        </div>
    )
}

export default SignUpPage