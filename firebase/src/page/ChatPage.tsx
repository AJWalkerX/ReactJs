import React, { useEffect, useState } from 'react'
import { getDatabase, set, ref, onChildAdded, onChildChanged } from 'firebase/database'
interface IMessage{
    name:string,
    message:string
}
function ChatPage() {
    const [message, setMessage] = useState<string>('');
    const [list, setList] = useState<IMessage[]>([]);
    const messageList : IMessage[] = [];
    const db = getDatabase();
    const enter =(e: React.KeyboardEvent)=>{
        let time = Date.now();
        if(e.code === "Enter"){
            set(ref(db, 'chat/'+ time),{
                name:'alex',
                message:message,
            });
        }
    }
    const rootRef = ref(db, '/chat');
    useEffect(() => {
        onChildAdded(rootRef, (snapshot) => {
            messageList.push(snapshot.val());
            setList(messageList);
        })
    }, [])
   
  return (
   <div className="container">
        <div className="row m-4 border rounded-3">
            <input onChange={(e)=>setMessage(e.target.value)} onKeyDown={enter}  type="text" className="form-control"  placeholder='message...'/>
        </div>
        <div className="row mt-3">
            {
                list.map((item,index)=>{
                    return <div className="col-12 border rounded-3 p-3 mb-3" key={index}>
                        <p className="text-start">{item.name} : {item.message}</p>
                    </div>
                })
            }
        </div>
   </div>
  )
}

export default ChatPage