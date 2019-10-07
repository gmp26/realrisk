(ns site.home
  (:require [coast]))


(defn real-risk-logo
  [req]
  [:img.flex-initial {:alt "Real Risk!"
                      :src "assets/rr-logo.svg"}])

(defn winton-logo [req]
  [:img.flex-initial.hidden.sm:block.mt-2.mb-2.h-20
   {:alt "U of Cambridge Winton Centre for Risk and Evidence Communication"
    :src "assets/Cambridge logo.svg"
    }])

(defn header [req]
  [:header.w-full.flex.flex-wrap.items-center.justify-around.bg-gray-100.border-b-2.border-blue-500
   (real-risk-logo req)
   (winton-logo req)
   ])

(defn footer [req]
  [:img.flex-initial.hidden.sm:block.mt-2.mb-2.h-20
   {:alt "U of Cambridge Winton Centre for Risk and Evidence Communication"
    :src "assets/Cambridge logo.svg"
    }])

(defn page1 [req]
  [:section#page1]
  [:h1 "Getting started"])

(defn page2 [req]
  [:section#page2
   [:h1 "Research paper (optional)"]])

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

(defn main [req]
  [:main. {:role "main"}
   (page1 req)
   (page2 req)
   (page3 req)
   (page4 req)
   (page5 req)
   (page6 req)
   (page7 req)
   (page8 req)
   (page9 req)
   ])


(defn index [req]
  (header req))