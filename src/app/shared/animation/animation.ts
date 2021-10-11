import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';

export const fader =
    trigger( 'routeAnimations',[
        transition( '* <=> *', [
            style({ overflow: 'hidden' }),
            query(':enter, :leave' , [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    visibility: 'hidden',
                    opacity: 0,
                    height:'100%',
                    
                }),
            ]),
            query(':enter' ,[
                animate('350ms ease' , 
                    style({
                        visibility: 'visible' ,
                        height:'100%',
                        opacity: 1,
                        })
                )
            ])
        ]),
    ])

    export const opacity =
    trigger( 'routeAnimations',[
        transition( '* <=> *', [
            style({overflow: 'hidden',}),
            query(':enter, :leave' , [
                style({
                    position: 'absolute',
                    //width: 'box-sizing',
                    //display: 'none',
                    //visibility: 'hidden',
                    opacity: 0,
                    //height:'10px',
                }),
            ]),
            query(':enter' ,[
                animate('0.3s ease' , 
                    style({
                        //visibility: 'visible',
                        //display: 'inline-block',
                        //height:'20px',
                        opacity: 1,})
                )
            ])
        ]),
    ])