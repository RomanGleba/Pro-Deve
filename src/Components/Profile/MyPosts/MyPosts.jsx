import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from '../../Redux/Reducer/postsContent';
import { TextField, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    const [newPost, setNewPost] = useState('');
    const posts = useSelector(state => state.posts.posts); // Отримуємо пости з Redux
    const dispatch = useDispatch();

    const handleAddPost = () => {
        if (newPost.trim() !== '') {
            const newPostObj = {
                id: posts.length + 1,
                message: newPost.trim(),
                likesCount: 0,
                imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREBETEhMVEhMVFxgRFhYYEhUQGRYbFRoXFxgbGBUYHyggGholGxUYITEhJikrLi4uFx8zODMtNygwLisBCgoKDg0OGhAQGy0lICUtLy8tLS0rLS0tLS8tLS8vKy0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAgMHAf/EAEIQAAIBAgIFCAcFBgYDAAAAAAABAgMRBBIFITFBYQYTIlFxgZGhFDJScrHB0UJUkuHwIyQzYpOyFUNTZILiB8LS/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADMRAQACAQIEAwYFBQADAAAAAAABAgMEERIhMVEFQWETMnGBkaEUIrHR8CNCUsHhM2KS/9oADAMBAAIRAxEAPwDInZoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJwuAq1fUhKS67WX4nqOlcd7e7CNl1WHF79ohZ0eS9Z+s4R73J+St5neujyT12hBv4zgr7sTKVHkk99Xwp/8AY3/BT3R58bjyp9yXJLqreNP/ALGfwXqR45HnT7o1bktVXqyhLvcX8LeZpOjvHSYd6eNYZ96JhW4rRdan69OSXWlmXitRHtivXrCdi1mHL7toRDmlAAAAAAAAAAAAAAAAAAAAAAACw0ZoipX1xWWG+b2d3WztiwWydOiDqtfi0/Wd57Q1GA0BRpWbXOS65a/COxFhj01KesvP6jxPPl5RO0doWpIV8zuBgAAAAZV2P0LRq63HLL2o9F9+595wyael/Lmm6fxDPh5RO8dpZfSmg6lG79eHtJbPeW7t2EDLp7Y+fWHoNJ4jiz8uk9v2VZHWIAAAAAAAAAAAAAAAAAAAYaPQfJ/NapWWrbGGy/GXDgTcGl3/ADXUev8AFOGZx4evnP7NTFJJJaktSS1WLCI2eemZmd5fTLAAAzmO5VxhNxjBSSdrueTNbblVnq4kK+s2ttEbrvD4Na1Ite20z5LLR2maVbUnll7MtT7tzO2LUUyfFC1Ph+bBzmN47wsTuggAAGWc03yeTvOirPa4LY/d6nwIOfS/3U+i70Hik1/p5p5d+3xZVogPRRO4YZAAAAAAAAAAAAAAAAGj5M6HzWrVF0fsRe/+Z8Oom6XBv+eyi8U1/D/Rxzz85/01RYvOgADhXrRhFyk7RSu2YtaKxvLelLZLRWsc5YXlByllN5Y3jF7IrU5cZPq4fErMua2Sdo5Q9Po/D8eCOK3O36fBn3Sc3epbZZJbjStdk+ZdeGnUSdukk7ZX8mYmkScWzT6A5USj0Z3lHenrlHse9cPgdceotj5W5wrtX4bjzRxU5W+0tvRqxnFSi1KL1posq2i0bw81elqWmto2mHMy0AAGd5S6HzJ1qa6S1zS+0uvtXmQtTg3/AD1+a78M1/DMYsk8vKe3oyhXPRgZAAAAAAAAAAAAAAT9CaP5+qov1F0pvh1dr2eJ2wYvaW28kHX6r8PimfOeUN7GKSSWpLUl1FvDx8zMzvL6ZYAAGI5Yaau3COuMXa3tT+i2ePArdRl9pbhjpD0/hmkjDT2lven7Qz2EwknreuT2t/BGta9ljMpkcIt7N+BjdGwuHvOsrvU18zEV5yS+YrBS9aPrLY18zW1eTMSuuSmnckss9UG7SXsP2lw6/wAjODLOK209JQfENHGenHX3o+/o3hZvLAYAAGJ5SaN5mpmiuhPWuD3r5r8iq1OLgtvHSXq/DNX7bHw296PvCoIy0AAAAAAAAAAAAABhueTmC5qgm/Wn033+qvD4sttNj4aesvJeJ6j2ueYjpHKFoSFcAAK7T2O5mjJr1pdCPa9/crvwOGoycFPVO8P0/t80RPSOcvOsLT52o5P1YdGPF73+uBBxUertK/wui6tRXjC0fafRXnt7iVFJlCy6zDj5TPPtHOXdHA0YSXPYqjHriqiv2a9ngOGvnMOFtZktH9PHZB0SqVaFaTrUqUp15zjGc1F5LJQVt2/wNaRExM7+bfJlyYbRHDMxwx07plbQ9WKukpx64PP5bfI2mkw2prsNp2mdp9Y2Z/SFLJJVYr+Wa4df64EbJXeE6lm45K6Q52lkbvKFkn1xfqvu2eBK0mTirwz1h5zxXTezy8delv1812SlUAAIel8Fz1GcN+2PvLZ9O85ZsfHSYStHn9hmi/l5/B58Uz2kAZAAAAAAAAAAABJ0bhudrU4bnJX7FrfkmdMdeK8Qj6rL7LDa/aHohdPE77gYAAGI5c45ueRfYWVe9P8AKxW6q3Fk4ez03hOL2eGbz1t+kIuFqRwyVKlBYjEpdJvXSovfd/akn4WttQyZ8eCu89UnFp82tttXlX7z+0O+WjKuI14mtOpf7KeSC7Irb22RUZvEr2n8q/0vgeDFHP7fv1S6GgcPH/Li+1ZviQ51Wa09VlGjwV/tj5vmkcHg6Eb1qUE36tOMUqk+xKzS4ljpsGf38tpiO3nP7KLXazBM+y0tItb/AC/tr8/OfSFYtAYmlQqYulmwzT5xUIym3GnvcnJ63sdnuvs2LpGvp7Xgr9WtvC7Tp+LLzntMc31aVVaEY4yKXOK0cTBanfdVivitnmTaaiuSZrbqrb6LLpoi+LnWfLy+U9/Rx5N4h4fEZJtdCXNyad04z2ST3rZJcLGtJ9nliWNVjjU6aduvWPk9ELV5EAAAMHyhw3N4iaWyXTX/AC2+dyo1FOHJL2HhuX2mnrv1jl9FccE8AAAAAAAAAAAF5yQpXryl7MH4tpfC5L0dd8m/aFR4zfbBFe8tiWby4AAN227AzETM7Q8q0xVlWrK2pzk6nZd6vBFRWZvebd3tqUjHjrTtCVyfxNCi8QqlTLlacY5XJztdat177vkmcNRpYzf3bbJWDXW0/KtOLf122+K2xOnnGKawtVJ6k604YVPszXv2Jkamk0+/vTb+em6VfXa2Y5Vin1/3t+iVo6jjcWr0quHow2XpfvM1wvdpPvQtqMOnnalOf885/wBOcaHNq43zZd4+PL6Rt91/ovkpRwt69aXSWuVevNNrir6o9u3iQsuozZ52+0LHDp9PpY3rznuvMDpDCV4zpUK1Kq7PNGNSM32tJ3scrYr443mNm0Z65J67vHtIZaVDEYeTSlSruMFvcb3+F3fiWtIm2WuSOkxzV2S1a4LYZ6xbl8ESFJ06yV24yXRfDcu61ibkjkr69XqWi8RzlGnPe4q/atT80yzxW4qRLx+rx+zzWr6pR0RgABl+WlLXSn1qUX3Wa+LK/W15xL0Hgl+V6fNmiCvwAAAAAAAAAAAabkXHXWfuL+4n6LzUHjc8qR8WnJ7z4BHx2OhRjmqSt1La32LeaZMlaRvZ3wabJnttjhkdM8rHJOEVkjLo29acr6rdSv8ApkDJqbX5VjaF/pvC8eKYvkneY+il0dTcnUqSTi83NJNWccqvJNdetGMVdoWFr722hyVCPoM6uydHF3b35ZKKt2Xs+4g3tMajh7xKfStZ03H5xZ6bpjA4WNJ162F9Knkc30Yzywiszd6jUIRSu9t3rtdldpsmSv5aTEJutx48k8V4mfhMw+cjMHhVGeKoUamHdSNpQlqSUW2mox6O561xWp3R11V8l7xjnb5d0fSUx4qTkiZ268+fL/ay5TaLo4milXhOpGElVUINpykk0lZan62/VvutpwwZLY78tvmkanHXLj6z8lJyUo4LExp1qeBeHaeanUcIwbcHrtOm7r3ZWur6mrknV5c0bxaY+EQi6TBh2ia7/GZmf+MdpbCwdfTNWST5tKnDhKdotrinFL/kzfHe0VxVjz/R0vSs2zX7RG3xlVYml+7qX2qahPzjF/3eRbXjeqo4tpha6A5Tc0sls0bt5fVlG+2259hriz2xRtMckXWeH01M8UTtb7NngcfTrRvTlfrWxrtRYY8tbxvWXnNRpsmC3DeP2STojgFByyj+xg+qdvGMvoQ9b7kfFc+Cz/WtHoyJWvTAAAAAAAAAAAA03It/xl7j/uJ+i83n/G49yfi05PUD5OSSbepJXfcJnaN21Ym0xEebzjH4qeKxMY5sjqP1nrVOG79db3XuVP8A5r7y9fWldLg2rG+0fWV3CnQwLcaVPPWW2rU1vWt30Vu8mbVx8ojmrqUzayvHkttWfKFPgm5Uq0nt9JqOXbOMX/6s5V5xPxT42rlisf4x9kPFVnThiabTlTxEYvV9mcGmn2bb9vA4ZMVZtFp6x0SoyXis1ieU9f53ex8mcTz2Bw03Z56Ucy2q9rSXimjz2WvBkmO0r7FaMlInusJRjGOVWirZUtm7cjFJtN4t1nq1zVpGKa9I22c093kaTO87utYiIiseTjSpRgrRSjFbklFLe9SEzNp5kVrSNojaHhdTSLrqtTinlr4mWInLc4XvCK833I9Djw1iaz5xGyhvlvM2jf8ALM7puJj+74l7lTS8alNIl292UPJP5qR6/wCpWVGNDFwp069PLVyxjGrDVK6Wq7+t12HSIreIiYQcuPNpt8mO28dZiVVRqTweKlDPndPWpLVnjvT47u1cCJaJw33hOjh1mD80bbx9HotOakk1saTXY9aLWJ3jeHkbVmtprPWHIy1UPLJ/sYe+v7ZEPW+5HxXPgsf1rT6f7ZArXpgAAAAAAAAAAAX3I6ratOPtQ84tfJsl6O215j0U3jVN8MW7S15ZvMqvlLXyYafXK0PHb5JkfVW4ccrDwzFx6ivpzYHRyzSqz45F2L9Ih4q7Q9RaV/pCfOU6VT7VnSn2w1p96fkSbTvESg6evs8l8fl1j59fugaHjepiqO+cY4iHGVPVJLi1J+BpTrMNtTbgtTJ5RO0/P/qPjI3j2fM1tHJKhqv/ABnyhUF6FVaTTcqMt0lJuUo9t22u19RVazTcf569fNO0uq9nPBbpP2azlHUUVTc8LWxEIS51SoOLnCSTXqucW04ya1N3Taa66/Bvv+W20rDUbTG1q7w6dC45V67qwweJpZoqDqV8tJKMW2owp55Pa29UVfe9htlrw12m0T8GuG0TO9azCH/5A5SLDUXRp669ZOEUvsRkmnN9XDj2HbR6bjnjt0/Vw1eq2/p06+fp/wBea6No5V2K31LyiqTtKxy4WMPtYiokl/JS1t/ia8De/ux6o0W49R6Vj7z/AMTtEyyc5V9iNo+9Poryub4+W8tNXE5Jri7zz+EdVDpLVUpT4uLfXf8ATI+aN4TacuUN/wAnK2bDU+uN4fhbt5WJmmtxY4eX8Tx8Gpt681md0BmOWlX+DH3pPyS+ZX62ekPQeCU9+3whmSCvwAAAAAAAAAAATNEYnm69OT1JSs+yWp+TOuG3DeJRdZi9rhtX0egly8UzHLjEWjTj7033JJfFkHWz7tV94LT37/JmdFwtSjxvLxZrSOS5lY0p/s5x92a7U8vwl5G/lLjav54tHwQcROVOVOvT9ek83avtLvXxZpPLnDe9IyUmlukrPSVKMlGrT10qyzR4P7UXxTv+kdLxvzjpKLpMs7Tiv71fvHlLOzoZqtGObI3NQz+y20lLuesiZJmsTPZYUpF7RWfNv8DysUYSwmlIJStlcpK8K0VvulZ7Oz4KJXDjyzGXFaIn7N8uXPp4nDkpNq9OU7T8p84+7uq8ssLh6So4GmqlRt5KdNarva3ZW4mb6SvF7TNeJ+HJph1WWaxiwY5r62neflH8hgdLUqqxcufnzlZxU6ltajKWtRXBRcTvhyRkrvEcvJnJgnDPBM8/P4rXROCdSUYbF6037K3v5Eyld0PU54xUm3n5R3lGxOKWIxEqsdVKmuZor+WOpvv+fAxM8Vt/LyY02GcdNrdZ5z8UqU7UlH2pOb7EssfPObb8tm0V3y8XaNv59lXpdfsm/Zafy+ZpeOTvDX8jKt6VRdUs34kv/k30U/lmFF41X+pW3eGhJqlYblLiM+InbZC0F3bfNvwKnU34sk+j13heL2enjfz5qsjrEAAAAAAAAAAAADe6BxvPUIt+tHoS7Vv71Z95b6fJx0ju8br9P7HNMR0nnDKcva/7SS9mEY+LbfkyJqZ3y7ei78Jptpt+8yh4ZWhFLckvBWN46JztMj7Thmko9bUfHUJFlWpU8JjK+Bk36PUlF0pP/KnKMZJX6ulbw62YxW/tnpKHq8domM+P3o6+sKLT2AlByi9Ul1da2NPia5KbSk4ctclYvVvNC4qGMwtKc4xm2rTTipJTjqlqfHX2NHls9LYckxD1+nvXPii0xv3+KYqVGhGc1CFOMU5ScYRjqSu9nYab3yTFd93bbHiibbRDzLDzliK06rXSqTzW277Rj8u49Pgx8NYrHk8jnzcdrXt5817jY5XSwMJJVcRKCrz283CbSy96f6zapOSeGOCOvmq8ETqMvtre7Hu/uj47ArD1J0VspycVxW5vi1ZmteiwdJkR9IRvSn2N+GsxbozC85B1PXXXCD8Lr5mNHP5rQqfGq70pZpdI4tUaU5vctS629SXiTMt+Ck2U2mwzmy1pH8h55KTbbetvW32lNvvze2rERG0PhhkAAAAAAAAAAAAC05PaR5mr0n0J2jLh1S7vg2SNPl9nbn0lXeJaX2+LevvRzj9lfyuqZsRPjUUfwrL8jOSd8tpbaOvBpqR6OOjMNXrKToxhki8uacsqb3pdf5nSnFPRnLnpjnad5n0jdN/wfGf7f+qzba3ePq4/jKf42+kn+D4z/b/1WNrd4+p+Mp/jb6SkadwONxks1WOFTyqLcaklfLsetvXrMeznvH1Z/GU/xt9JfMVgMbVpwjP0aTgsufnHmkv5nsfgbWi1o2mY/nzcMWTFimZrFufltOz7oTBY7Cc4qfozjNqTjKo2k1vVrbVbwRCz6GuaYm0xy9YWOm8YnBExWs8+9Zd+l4aQxNJ0peixjJq+SpJNpO9rtvVe3gaYfDaYrcUT94dM3jtstOCazt6VlF0ZozF0HmjHCtpWWao3birNaywrFq9Jj6qvNmx5a8Novt6Q4aO0VjKNbnv3apUz843Oq5Xktava2x6+414Ld4+rpGrx1iIitto/9ZdmMwGOq1J1JejZpNydqjtr3LgZito84+rP4yn+Nv8A5l0/4RjP9t/VY2t3j6n4yna30Q8fTq0ehXjFKakozhLNFu2zt+pid45S74s1cnu78u/JY8gZ9Ncacl4Sj9DXS/8AlmPRE8XjfTxPqk8qdI85Pm4vowevjL8tniY1WXitwx0g8J0ns6e0tHOf0/6oiIuAAAAAAAAAAAAAAACHjXedPvZ0xud1tyWraqtJ/ZlnXZL815mMsc92Kr45tgAAAAAAAABHmtbMtlBp+pmq06e6KdR9+pfDzOuOPNzu69A4uVKOaGqVpQv1ZuriOKaW3hpfDXLWK26b7uZzd4gMMgAAAAAAAAAAAAAAELEfxY8It/E643O7vwFbm8RTlul+zl37PO3gbXjeGsS1xHbgAABaYfQk5K8mocLZn3mNxzq6Bkl0Zp8Gsv1G4qZwabTVmtTRkfAPjYEcy2ZWVTnKtSp1yyrsjqXyJFY2hymeZo31X7z+Ryv1b1SzRuAAAAAAAAAAAAAAAAIVb+N/x+Z2x9HO75iYXi+ta13G8tGs0di1VpQnvaV+3Y/O5GmNpdEowABAXeH07q6cXfrjbX3PYY2HOrp6NujBt8bJeVzGwpK1Ryk5Pa3dmw62wOmc7mW0Qg6WxHN0Zy32su2WpfG/cbRG8sTO0M/QhlikSHJy0d6svefyOF+rpVLNG4AAAAAAAAAAAAAAAAh4+Nss19nU+x/rzN6TzaXhyi761sO7klaExsaWalN5VfNBvUte6+782cb1dKyu1io+3H8SOezdy9Mj7UfxL6jZg9Nj7UfxL6jYPTY+1H8S+o2D02PtR/EvqNg9Mj7UfFfUbDi8TH24/iQ2Hz0iHtx/EjLO6j0zjI1ZRpweaMXmk1svuSe/f4nSlWlpQ8RVyri9SXE6tEnC0skEt+/tZGmd5dojk7TDIAAAAAAAAAAAOM5WTdr8EZYl0QxLbS5uSvvtsMzX1Y3d2fpWs9l77uztMM7umWKabXNzfcZ4fVjdxeKf+nPwM8Pqb+iLFyi+jCWXqaersZvE7NJh20JLnM1SjKcctsuta+sWnfpJEJfPYf7nPxf1Ndp7m3oc9h/uc/F/UbT3NvQ57D/c5+L+o59zb0Oew/3Ofi/qOfc29DnsP9zn4v6jae5t6HPYf7nPxf1G09zb0Oew/wBzn4v6jae5t6HPYf7pPxf1HPubeiHXl026VKUItJZXd6+s3rO3WSYlxoNp5pQnKW7VqXYa25+bMRsk+lv/AE5+Brw+rbc9Lf8Apz8Bw+pu7aVVtN5WrbntfYazBEuuOKbaXNzXcZ4fU3STVsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=',
            };
            dispatch(addPost(newPostObj));
            setNewPost('');
        }
    };

    const handleDeletePost = (postId) => {
        dispatch(deletePost(postId));
    };

    const postElements = posts.map(post => (
        <div key={post.id} className={s.post}>
            <Post
                message={post.message}
                likesCount={post.likesCount}
                imageUrl={post.imageUrl}
            />
            <IconButton
                onClick={() => handleDeletePost(post.id)}
                color="secondary"
                aria-label="delete post"
            >
                <DeleteIcon />
            </IconButton>
        </div>
    ));

    return (
        <div className={s.postsBlock}>
            <h3>Chat</h3>
            <div>
                <TextField
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    label="Your Post"
                    variant="outlined"
                    multiline
                    rows={2}
                    className={s.textFieldCustom}
                />
                <Button
                    onClick={handleAddPost}
                    variant="contained"
                    color="primary"
                    className={s.buttonCustom}
                >
                    Add Post
                </Button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;



