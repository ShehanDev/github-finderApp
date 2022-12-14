import React from 'react'
const User = (props) => {
    // constructor() {
    //     super();
    //     //set default state of git hub user 
    //     this.state = {
    //         id: 'id',
    //         login: "mojombo",
    //         avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //         html_url: "https://github.com/mojombo"

    //     }
    // }

    //all data passing thrugh out the props 
    // state = {
    //     id: 'id',
    //     login: "mojombo",
    //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo"

    // }


    const { avatar_url, login, html_url } = props.user;
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{ width: '60px' }} />
            <h3 >{login}</h3>
            <div >
                <a href={html_url} className='btn btn-dark btn-sm my-1'>more</a>
            </div>

        </div>
    );

}

export default User;