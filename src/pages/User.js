/** @format */

import React from 'react';
import '../components/style/user.css';
import { useSession } from '../hooks/AuthSession';

const User = () => {
  const session = useSession();

  return (
    <div className='user_body'>
      <div>
        <h1 className=' d-flex justify-content-center align-items-center'>
          Profile
        </h1>
      </div>
      <div
        className='page-content page-container'
        id='page-content'>
        <div className='padding'>
          <div className='row container d-flex justify-content-center'>
            <div className='col-xl-6 card-user col-md-12'>
              <div className='card user-card-full'>
                <div className='row m-l-0 m-r-0'>
                  <div className='col-sm-4 bg-c-lite-green user-profile'>
                    <div className='card-block text-center text-white'>
                      <div className='m-b-25'>
                        <img
                          src={session?.avatar}
                          className='img-radius'
                          alt={session?.firstName}
                        />
                      </div>
                      <h6 className='f-w-600'>{session?.nickName}</h6>
                      <p>{session?.role}</p>
                      <i className=' mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16'></i>
                    </div>
                  </div>
                  <div className='col-sm-8'>
                    <div className='card-block'>
                      <h6 className='m-b-20 p-b-5 b-b-default f-w-600'>
                        Information
                      </h6>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Email</p>
                          <h6 className='text-muted f-w-400'>
                            {session?.email}
                          </h6>
                        </div>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>nickName</p>
                          <h6 className='text-muted f-w-400'>
                            {session?.nickName}
                          </h6>
                        </div>
                      </div>
                      <h6 className='m-b-20 m-t-40 p-b-5 b-b-default f-w-600'>
                        Other informations
                      </h6>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Name & LastName</p>
                          <h6 className='text-muted f-w-400'>
                            {session?.firstName} {''} {session?.lastName}
                          </h6>
                        </div>
                        <div className='col-sm-6'>
                          <p className='m-b-10 f-w-600'>Your Birth Date</p>
                          <h6 className='text-muted f-w-400'>
                            {session?.birth}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
