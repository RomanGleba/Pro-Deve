import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogsitem';
import Message from './Message/Message';







const Dialogs = (props) => {
  let Dialogchat = [
    { id: 1, name: 'Roma' },
    { id: 2, name: 'Yurii' },
  ];

  let Messagechat = [
    { id: 1, message: 'Hi Yurii, how are you?' },
    { id: 2, message: 'Hi Roma, I am good' },
  ];

  let Dialogelement = Dialogchat.map(d => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let Messageelement = Messagechat.map(m => (
    <Message key={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {Dialogelement}
      </div>
      <div className={s.messages}>
        {Messageelement}
      </div>
    </div>
  );
};


export default Dialogs;