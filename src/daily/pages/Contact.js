import { useForm } from "react-hook-form"
import { postContact } from "../api/postContact"

export const Contact = () =>{

    const { register, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        postContact(data)
        window.alert(data.name + "さん、お問い合わせありがとうございました！")
        e.target.reset()
    }

    return(
        <div>
            <h1>お問い合わせフォーム</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>お名前（必須）</h2>
                <input type="text" name="name" required={true} ref={register} placeholder="ぴよぱんまん"/><br></br>
                <h2>メールアドレス</h2>
                <input type="text" name="email" ref={register} placeholder="hoge@gmail.com"/> <br></br>
                <h2>Twitterアカウント（必須）</h2>
                <input type="text" name="twitter" required={true} ref={register} placeholder="@hiyoko_coder"/><br></br>
                <h2>推し（言語、アーティストなど分野問わず）</h2>
                <input type="text" name="oshi" ref={register} placeholder="Java"/><br></br>
                <h2>お問い合わせ内容（必須）</h2>
                <textarea name="content" required={true} ref={register} placeholder="今日の晩ご飯のメニューは何ですか？"/><br></br>
                <input type="submit" value="送信！" />
            </form>
        </div>
    )
}