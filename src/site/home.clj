(ns site.home
  (:require [coast]))




(defn index [request]
  [:section.w-full.flex.items-center.justify-around.bg-gray-100 {:style {:height 112}}
   [:img {:alt   "Real Risk!"
          :src   "assets/rr-logo.svg"
          :style {:width 352}}]
   [:img {:alt "U of Cambridge Winton Centre for Risk and Evidence Communication"
          :src "assets/Cambridge logo.svg"
          :style {:width 191}}]])
