(ns site.home
  (:require [coast]
            [rum.core :as rum]))


(defn real-risk-logo
  [req]
  [:img.flex-initial {:alt "Real Risk!"
                      :src "assets/rr-logo.svg"}])

(defn winton-logo [req]
  [:img.h-20 {:alt "U of Cambridge Winton Centre for Risk and Evidence Communication"
              :src "assets/Cambridge logo.svg"}])

(defn header [req]
  [:header.z-50.fixed.w-full.flex.flex-wrap.items-center.justify-around.bg-gray-200.border-b-2.border-blue-500
   (real-risk-logo req)
   [:section.hidden.sm:block.mt-3.mb-3
    (winton-logo req)]
   ])

(defn footer [req]
  [:section.fixed.block.sm:hidden.mt-3.mb-3.h-20
   (winton-logo req)
   ])

(defn partial-page
  [req id title]
  [:div
   (header req)
   [:section {:id    (str "page" id)
                    :style {:height "calc(100vh)"}}
    [:div.h-20]
    [:h1.text-blue-600.text-xl.font-semibold title]]])

(defn page1 [req]
  (partial-page req 1 "Getting started"))

(defn page2 [req]
  (partial-page req 2 "Research paper (optional)"))

(defn page3 [req]
  [:section#page3
   [:h1 "Study group"]])

(defn page4 [req]
  [:section#page4
   [:h1 "Condition"]])

(defn page5 [req]
  [:section#page5
   [:h1 "Intervention"]])

(defn page6 [req]
  [:section#page6
   [:h1 "General risk"]])

(defn page7 [req]
  [:section#page7
   [:h1 "Measure of change"]])

(defn page8 [req]
  [:section#page8
   [:h1 "Population (optional)"]])

(defn page9 [req]
  [:section#page9
   [:h1 "Results"]])

(defn index [req]
  [:main {:role "main"}
   (header req)
   (page1 req)
   (page2 req)
   (page3 req)
   (page4 req)
   (page5 req)
   (page6 req)
   (page7 req)
   (page8 req)
   (page9 req)
   (footer req)
   ]
  )