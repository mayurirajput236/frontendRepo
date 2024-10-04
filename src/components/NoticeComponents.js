import React, { useState, useEffect } from 'react';

import { useNotices } from '../MyContext';

const NoticeComponent=()=>{
    const { notices } = useNotices();

    return(
        <div className='w-full h-60 bg-white rounded-lg p-6 shadow mt-4'>
                <h2 className='text-lg font-bold'>Notices</h2>
                <div>
                    {notices.length > 0 ? (
                        notices.map((notice, index) => (
                            <div key={index} className="border-b border-gray-300 py-2 text-xl font-bold">
                                {notice}
                            </div>
                        ))
                    ) : (
                        <div>No notices available</div>
                    )}
                </div>
            </div>
    )
}

export default NoticeComponent;