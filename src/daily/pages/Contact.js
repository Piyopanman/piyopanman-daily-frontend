import React, { useState, useEffect } from 'react'

export const Contact = () =>{
    return(
        <div>
            <h1>お問い合わせフォーム</h1>
            <form>
                <h2>お名前（必須）</h2>
                <input type="text" name="name" required={true} value="" placeholder="ぴよぱんまん"  /><br></br>
                <h2>メールアドレス</h2>
                <input type="text" name="email" value="" placeholder="hoge@gmail.com"  /> <br></br>
                <h2>Twitterアカウント（必須）</h2>
                <input type="text" name="twitter" required={true} value="" placeholder="@hiyoko_coder"  /><br></br>
                <h2>お問い合わせ内容（必須）</h2>
                <textarea name="content" required={true} value="" placeholder="今日の晩ご飯のメニューは何ですか？"  /><br></br>
                <input type="submit" value="送信" />
            </form>
        </div>
    )
}