(ns site.home
  (:require [coast]
            [rum.core :as rum]
            [clojure.pprint :refer [pprint]]
            [org.winton.realrisk.widgets :as w]
            ))


(defn real-risk-logo
  [req]
  [:img.flex-none {:alt "Real Risk!"
                   :src "assets/rr-logo.svg"}])

(defn winton-logo [req]
  [:img.h-16.flex-none {:alt "U of Cambridge Winton Centre for Risk and Evidence Communication"
                        :src "assets/Cambridge logo.svg"}])

(defn header [req]
  [:header.z-50.bg-white.pl-20.pr-20.fixed.w-full.flex.flex-wrap.items-center.justify-between.border-b-2.border-blue-500
   {:style {:min-height "3rem"}}
   (real-risk-logo req)
   [:section.hidden.sm:block.mt-3.mb-3
    (winton-logo req)]
   ])

(defn footer [req]
  [:div
   [:section.fixed.block.sm:hidden.mt-3.mb-3.h-16 (winton-logo req)]])


(rum/defc page1
  [req]
  [:main.mt-3
   [:p (pr-str (:paper-title (:params req)))]

   [:p "Real Risk helps you to communicate the risks and benefits of scientific research effectively."]
   [:p.mt-2 "To use this tool you need"]
   [:ul
    [:li.flex.flex-row.items-center
     (w/icon-text "docs" "access to the original research paper")]
    [:li.flex.flex-row.items-center
     (w/icon-text "people" "information about the study group and your audience")]
    [:li.flex.flex-row.items-center
     (w/icon-text "percent" "knowledge of risk or benefit before and after the intervention")]]
   [:a {:href "/p2"} [:button.btn-blue.text-xl.sm:text-3xl.font-sans.py-2.mb-10.mt-10 "Get the real risk >"]]
   [:p "It should take less than 5 minutes to get a summary of the risks associated with any intervention"]])

(defn page2
  [req]
  (let [{:keys [paper-title-help doi-help]} (:params req)]



    [:main.mt-6
     [:div.font-serif.text-xl
      [:p2 (pr-str (:params req) (type paper-title-help))]
      (w/icon-text "docs" "Which research paper are you writing about?")
      [:form.mt-6
       (w/text-input (assoc req :id "paper-title" :title "Research paper title"
                                :help "Please enter the full research paper title. This text goes on and on and on."
                                :active? paper-title-help
                                ))
       (w/text-input (assoc req :id "doi" :title "Enter the DOI number of the paper"
                                :help "The DOI is the globally unique Digital Object Identifier assigned to every paper."
                                :active? doi-help))]]

     ]))

(defn page3
  [req]
  [:main.mt-6
   [:div.font-serif.text-xl
    (w/icon-text "people" "Which group or population is studied in this paper?")
    [:form.mt-6
     (w/text-input {:id "paper-title" :title "population"
                    :help "Enter a short description, e.g.'men', or 'women over 50'"
                    :active? false})
     ]]
   ])

(defn page4
  [req]
  [:main.text-grey-600 "Page 4 content"])

(defn page5
  [req]
  [:main.text-grey-600 "Page 5 content"])

(defn page6
  [req]
  [:main.text-grey-600 "Page 6 content"])

(defn page7
  [req]
  [:main.text-grey-600 "Page 7 content"])

(defn page8
  [req]
  [:main.text-grey-600 "Page 8 content"])

(defn page9
  [req]
  [:main.text-grey-600 "Page 9 content"])


(defn results-box
  []
  [:section {:key 2 :class ".sm:w-1/3 sm:px-2 sm:pt-20 "}
   [:div.m-1.bg-white.border.border-gray-500.flex.flex-col.flex-1.mt-10.sm:mt-0
    [:h1.text-lg.sm:text-2xl.font-semibold.font-serif "Results summary"]]])

(defn partial-page
  [req]
  (let [{title   :page-title
         id      :page-id
         content :page-content} req]
    [:div.text-gray-700.text-xl
     (header req)
     [:section.m-1.bg-dblue-100.h-screen {:id (str "page" id)}
      [:div.h-full.pt-16.sm:pt-32
       [:div.flex.flex-col.w-full.sm:w-auto.sm:flex-row.sm:h-full
        [:div {:key 1 :class (str "relative flex flex-col justify-between sm:px-20 "
                                  (if (> id 2) ":sm.ml-auto :sm.w-2/3" "w-full"))}
         [:section {:style {:overflow-y "scroll"}}
          [:h1.text-2xl.sm:text-4xl.font-semibold.border-solid title]
          [:main.text-base.sm:text-lg.leading-normal.sm:leading-loose.mb-10.font-serif
           [:div {:id (str "page-" id)}
            (content req)]]]]
        (when (> id 2) (results-box))
        [:div.absolute.bottom-0.right-0.mr-1.mb-1 (w/bottom-nav req)]
        [:div.sm:hidden.absolute.bottom-0.left-0.w-32.block (winton-logo req)]
        ]]]]))

(defn p1 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 1 :page-title "Getting started" :page-content page1))
   (footer req)])

(defn p2 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 2 :page-title "Research paper (optional)" :page-content page2))
   (footer req)])

(defn p3 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 3 :page-title "Study group" :page-content page3))
   (footer req)])

(defn p4 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 4 :page-title "Condition" :page-content page4))
   (footer req)])

(defn p5 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 5 :page-title "Intervention" :page-content page5))
   (footer req)])

(defn p6 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 6 :page-title "General risk" :page-content page6))
   (footer req)])

(defn p7 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 7 :page-title "Measure of change" :page-content page7))
   (footer req)])

(defn p8 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 8 :page-title "Population (optional)" :page-content page8))
   (footer req)])

(defn p9 [req]
  [:main.h-screen.block {:role "main"}
   (header req)
   (partial-page (assoc req :page-id 9 :page-title "Results" :page-content page9))
   (footer req)])




