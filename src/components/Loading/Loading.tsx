import loadingGif from '../../assets/anime-confused.gif'

export const Loading = () => {
    return(
        <img 
            src={loadingGif}
            alt="gif" 
            className="loading"  
            data-testid="loading-gif"
        />
    )
}