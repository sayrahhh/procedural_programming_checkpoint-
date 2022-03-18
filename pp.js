function dot_product (v1, v2){
    (v1[0] * v2[0]) + (v1[1] * v2[1])
    let ps = (v1[0] * v2[0]) + (v1[1] * v2[1])
    return ps
}


function isOrthogonal (v1, v2){
    if (ps(v1, v2) = 0){
        return "vectors are orthogonal"
    } else{
        return "vectors are not orthogonal"
    }
}


console.log (isOrthogonal(1,2))