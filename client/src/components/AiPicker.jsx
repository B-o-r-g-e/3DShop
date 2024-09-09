import CustomButton from "./CustomButton.jsx";

const AiPicker = ({ prompt, setPrompt, handleSubmit, generatingImg }) => {
    // const handleButtonClick = (type) => {
    //     if (!prompt) {
    //         alert('Please enter a prompt');
    //         return;
    //     }
    //     handleSubmit(type);
    // };
    //
    // return (
    //     <div className="aipicker-container">
    //         <textarea
    //             className="aipicker-textarea"
    //             placeholder={'Ask AI...'}
    //             rows={5}
    //             value={prompt}
    //             onChange={(e) => setPrompt(e.target.value)}
    //         />
    //         <div className={'flex flex-wrap gap-3'}>
    //             {generatingImg
    //                 ? (
    //                     <CustomButton
    //                         type={'outline'}
    //                         title={'Asking AI...'}
    //                         customStyles={'text-xs'}
    //                     />
    //                 )
    //                 : (
    //                     <>
    //                         <CustomButton
    //                             type={'outline'}
    //                             title={'AI Logo'}
    //                             handleClick={() => handleButtonClick('logo')}
    //                             customStyles={'text-xs'}
    //                         />
    //
    //                         <CustomButton
    //                             type={'filled'}
    //                             title={'AI Full'}
    //                             handleClick={() => handleButtonClick('full')}
    //                             customStyles={'text-xs'}
    //                         />
    //                     </>
    //                 )
    //             }
    //         </div>
    //     </div>
    // );
};

export default AiPicker