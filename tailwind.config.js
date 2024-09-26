/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.{html,js}"],
  theme: {
    extend: {
      keyframes:{

        berenang: {
          '0%, 100%':{
            transform: 'translateX(0)'
          },
          '25%':{
            transform: 'translateX(-30vw)'
          },
          '50%' : {
            transform: 'rotateY(180deg)'
          },
          '75%':{
            transform: 'translateX(50vw)'
          },
        },

        fadeR:{
          '0%':{
            transform: 'translate(10px, 10px)'
          },
          '100%' :{
            transform: 'translate(50vw, 10px)'
          }
        },

        opa:{
          '0%':{
            opacity: '100%'
          },
          '100%' :{
            opacity: '0%'
          }
        },

        opa2:{
          '0%':{
            opacity: '0%',
            transform: 'scale(0)',
          },
          '100%' :{
            opacity: '100%',
            transform: 'scale(1)',
          }
        },

        fadeL:{
          '0%':{
            transform: 'translate(10px, 0)'
          },
          '100%' :{
            transform: 'translate(-50vw, 0)'
          }
        },

        turun:{
          '0%, 100%':{
            transform: 'translate(10px, 10px)'
          },
          '50%' :{
            transform: 'translate(10px, 20vw)'
          }
        },

        naik:{
          '0%':{
            transform: 'translate(10px, 10px)'
          },
          '100%' :{
            transform: 'translate(10px, -50vw)'
          }
        },

        naik2:{
          '0%':{
            transform: 'translate(-1px, 10px)'
          },
          '100%' :{
            transform: 'translate(-1px, -200vw)'
          }
        },
        cumi:{
          '0%, 100%':{
            transform: 'translate(10px, 10px)'
          },
          '50%' :{
            transform: 'translate(10px, 10vw)'
          }
        },

        bgTurun :{
          '0%': {
            backgroundPositionY: '10vw'
          },
          '100%' : {
            backgroundPositionY: '110vw'
          }
        },

        lumba:{
          '0%,100%':{
            transform: 'rotate(00deg)'
          },
          '50%' :{
            transform: 'rotate(40deg)'
          },
        },
      },
      animation:{
        kanan: 'fadeR 1s ease-in-out forwards',
        kiri: 'fadeL 1s ease-in-out forwards',
        putar: 'lumba 6s ease-in-out infinite',
        naktur: 'turun 4s ease-in-out infinite',
        cumi: 'cumi 6s ease-in-out infinite',
        opa: 'opa 0.5s ease-in-out forwards',
        naik: 'naik 1s ease-in-out forwards',
        naik2: 'naik2 1s ease-in-out forwards ',
        opa1: 'opa2 0.3s ease-in-out 0.2s forwards ',
        opa2: 'opa2 0.6s ease-in-out 0.5s forwards ',
        opa3: 'opa2 0.6s ease-in-out 0.6s forwards ',
        opa4: 'opa2 0.6s ease-in-out 0.7s forwards ',
        opa5: 'opa2 0.6s ease-in-out 0.8s forwards ',
        opa6: 'opa2 0.6s ease-in-out 0.9s forwards ',
        bgTurun: 'bgTurun 0.6s ease-in-out 1s forwards ',
        swim: 'berenang 8s ease-in-out infinite',



      },
      
    },
  },
  plugins: [],
}

