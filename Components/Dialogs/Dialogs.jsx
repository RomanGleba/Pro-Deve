import React from 'react';
import s from './Dialogs.module.css'



        


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>

          <div className={s.dialogsItems}>
            <div className={s.dialog + '' + s.active}>
                Roma
        </div>
        <div className={s.dialog}>
            Yurii
            </div>
        <div>

        </div>
        </div>

    <div className={s.messages}>
        <div className={s.dialog}>Hi Yurii how are you</div>
        <div className={s.dialog}>Hi Roma good</div>
      </div>
    </div>
    

    )
}



export default Dialogs;