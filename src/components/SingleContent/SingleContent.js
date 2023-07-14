import {img_300, unavailable} from "../../config/config.js"
import "./SingleContent.css"
import { Badge } from '@mui/material';
import ContentModal from "../ContentModal/ContentModal.js";
const SingleContent=({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
})=>{
    return (
    <ContentModal media_type={media_type} id={id}>
        <Badge badgeContent={Math.round(vote_average)} 
            color={vote_average >6?"primary":"secondary"}
        />
        <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title}></img>
        <b className="title">{title}</b>
        <span className="subtitle">
            {media_type === "tv" ? "TV Series" : "Movies"}
            <span className="subtitle">{date}</span>
        </span>
    </ContentModal>
    );
};

export default SingleContent;