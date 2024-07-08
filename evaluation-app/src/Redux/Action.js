import { SOLIDS,LINEAR_GRADIENT,RADIAL_GRADIENT,SET_BG } from "./ActionType";

const solidBG=(value)=>({
    type:SOLIDS,
    SolidPayload:value
})

const linearGradientBG=(value1,value2)=>({
    type:LINEAR_GRADIENT,
    LinearPayload1:value1,
    LinearPayload2:value2
})

const radialGradientBG=(value1,value2)=>({
    type:RADIAL_GRADIENT,
    RadialPayload1:value1,
    RadialPayload2:value2
})

export const setSolid=(value)=>{
        return (dispatch)=>{
                dispatch(solidBG(value))
        }
}

export const setLinearGradient=(value1,value2)=>{
    return (dispatch)=>{
        dispatch(linearGradientBG(value1,value2))
    }
}

export const setRadialGradient=(value1,value2)=>{
    return (dispatch)=>{
        dispatch(radialGradientBG(value1,value2))
    }
}