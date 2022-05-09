export const getScoreColor = (score: number | string | null | undefined): string => {
    if(score){
        if(score >= 7.5) return 'green'
        if(score >= 5 && score <= 7.5) return 'orange'
        if(score <= 4.9) return 'red'
    }
    return 'white'
}

