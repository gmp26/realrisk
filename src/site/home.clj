(ns site.home
  (:require [coast]
            [rum.core :as rum]
            [clojure.pprint :refer [pprint]]
            [org.winton.realrisk.widgets :as w]
            [coast.theta :as coast]
            [ring.util.response :refer [response]])
  )


(defn real-risk-logo
  [request]
  [:img.flex-none.object-contain.max-w-xs
   {:alt "Real Risk!"
    :src "assets/rr-logo.svg"}])

(defn winton-logo [request]
  [:img.h-16.flex-none.object-contain
   {:alt "U of Cambridge Winton Centre for Risk and Evidence Communication"
    :src "assets/Cambridge logo.svg"}])

(defn header [request]
  [:header.z-50.bg-white.pl-20.pr-20.fixed.w-full.flex.flex-wrap.items-center.justify-between.border-b-2.border-blue-500
   {:style {:min-height "3rem"}}
   (real-risk-logo request)
   [:section.hidden.sm:block.mt-3.mb-3
    (winton-logo request)]
   ])

(defn mobile-footer
  "Display Winton logo in footer on mobile screens"
  [request]
  [:section.fixed.block.sm:hidden.mt-3.mb-3.h-16 (winton-logo request)])


(rum/defc page1
  [request]
  [:main.mt-3
   [:p (pr-str (:paper-title (:params request)))]

   [:p "Real Risk helps you to communicate the risks and benefits of scientific research effectively."]
   [:p.mt-2 "To use this tool you need"]
   [:ul
    [:li.flex.flex-row.items-center
     (w/icon-text "docs" "access to the original research paper")]
    [:li.flex.flex-row.items-center
     (w/icon-text "people" "information about the study group and your audience")]
    [:li.flex.flex-row.items-center
     (w/icon-text "percent" "knowledge of risk or benefit before and after the intervention")]]
   [:a {:href "/p2"} [:button.btn-blue.text-xl.sm:text-3xl.font-sans.py-2.mb-10.mt-10
                      {:name "next"
                       :value 2}
                      "Get the real risk >"]]
   [:p "It should take less than 5 minutes to get a summary of the risks associated with any intervention"]])

(defn page2
  [{:keys [params session] :as request}]
  (let [sess (dissoc session :ring.middleware.anti-forgery/anti-forgery-token)]
    (let [{:keys [paper-title paper-title-help doi doi-help]} params]

      [:main.mt-6
       [:div.font-serif.text-xl
        [:p "page-id " (:page-id request)]
        [:p "request params " params]
        [:p "session params " sess]
        (w/icon-text "docs" "Which research paper are you writing about?")

        (w/text-input (assoc request :id "paper-title"
                                     :label "Research paper title"
                                     :title (or paper-title (:paper-title session))
                                     :help "Please enter the full research paper title. This text goes on and on and on."
                                     ))
        (w/text-input (assoc request :id "doi"
                                     :label "Enter the DOI number of the paper"
                                     :title (or doi (:doi session))
                                     :help "The DOI is the globally unique Digital Object Identifier assigned to every paper."))
        ;[:div.absolute.bottom-0.right-0.mr-1.mb-2.font-sans (w/bottom-nav request)]
        ]])))

(defn page3
  [{:keys [params session] :as request}]
  (let [sess (dissoc session :ring.middleware.anti-forgery/anti-forgery-token)]
    (let [{:keys [paper-title paper-title-help doi doi-help]} params]

      [:main.mt-6
       [:div.font-serif.text-xl
        [:p "page-id " (:page-id request)]
        [:p "request params " params]
        [:p "session params " sess]
        (w/icon-text "docs" "Which research paper are you writing about?")

        (w/text-input (assoc request :id "paper-title"
                                     :label "Research paper title"
                                     :title (or paper-title (:paper-title session) "Research paper title")
                                     :help "Please enter the full research paper title. This text goes on and on and on."
                                     ))
        (w/text-input (assoc request :id "doi"
                                     :label "Enter the DOI number of the paper"
                                     :title (or doi (:doi session) "Enter the DOI number of the paper")
                                     :help "The DOI is the globally unique Digital Object Identifier assigned to every paper."))
        ;[:div.absolute.bottom-0.right-0.mr-1.mb-2.font-sans (w/bottom-nav request)]
        ]]))
  #_[:main.mt-6
     [:div.font-serif.text-xl
      (w/icon-text "people" "Which group or population is studied in this paper?")
      [:form.mt-6
       (w/text-input {:id   "population" :title "population"
                      :help "Enter a short description, e.g.'men', or 'women over 50'"})]]])

(defn page4
  [request]
  [:main.text-grey-600 "Page 4 content"])

(defn page5
  [request]
  [:main.text-grey-600 "Page 5 content"])

(defn page6
  [request]
  [:main.text-grey-600 "Page 6 content"])

(defn page7
  [request]
  [:main.text-grey-600 "Page 7 content"])

(defn page8
  [request]
  [:main.text-grey-600 "Page 8 content"])

(defn page9
  [request]
  [:main.text-grey-600 "Page 9 content"])

(defn results-box
  []
  [:section {:key 2 :class ".sm:w-1/3 sm:px-2 sm:pt-20 "}
   [:div.m-1.bg-white.border.border-gray-500.flex.flex-col.flex-1.mt-10.sm:mt-0
    [:h1.text-lg.sm:text-2xl.font-semibold.font-serif "Results summary"]]])

(defn partial-page
  [request]
  (let [{title   :page-title
         id      :page-id
         content :page-content} request]
    (println "page" id ": " title)
    (println " session " (:session request))
    (println " params " (:params request))

    [:main.h-screen.block {:role "main"}
     (coast/form-for
       :routes/saver
       [:div.text-gray-700.text-xl
        (header request)
        [:section.m-1.bg-dblue-100.h-screen {:id (str "page" id)}
         [:div.h-full.pt-16.sm:pt-32
          [:div.flex.flex-col.w-full.sm:w-auto.sm:flex-row.sm:h-full
           [:div {:key 1 :class (str "relative flex flex-col justify-between sm:px-20 "
                                     (if (> id 2) ":sm.ml-auto :sm.w-2/3" "w-full"))}
            [:section {:style {:overflow-y "scroll"}}
             [:h1.text-2xl.sm:text-4xl.font-semibold.border-solid title]
             [:main.text-base.sm:text-lg.leading-normal.sm:leading-loose.mb-10.font-serif
              [:div {:id (str "page-" id)}
               (content request)]]]]
           (when (> id 2) (results-box))
           [:div.sm:hidden.absolute.bottom-0.left-0.w-32.block (winton-logo request)]
           ]]]
        [:div.absolute.bottom-0.right-0.mr-1.mb-2.font-sans (w/bottom-nav request)]
        (mobile-footer request)])]))

(defn p1 [request]
  (partial-page (assoc request :page-id 1 :page-title "Getting started" :page-content page1))
  )

(defn p2 [request]
  (partial-page (assoc request :page-id 2 :page-title "Research paper (optional)" :page-content page2))
  )

(defn p3 [request]
  (partial-page (assoc request :page-id 3 :page-title "Study group" :page-content page3))
  )

(defn p4 [request]
  (partial-page (assoc request :page-id 4 :page-title "Condition" :page-content page4))
  )

(defn p5 [request]
  (partial-page (assoc request :page-id 5 :page-title "Intervention" :page-content page5))
  )

(defn p6 [request]
  (partial-page (assoc request :page-id 6 :page-title "General risk" :page-content page6))
  )

(defn p7 [request]
  (partial-page (assoc request :page-id 7 :page-title "Measure of change" :page-content page7))
  )

(defn p8 [request]
  (partial-page (assoc request :page-id 8 :page-title "Population (optional)" :page-content page8))
  )

(defn p9 [request]
  (partial-page (assoc request :page-id 9 :page-title "Results" :page-content page9))
  )


(defn saver
  [{:keys [params session] :as request}]

  (let [{:keys [back next reset]} params
        page-id (or back next reset 1)]
    ;(pprint (coast/redirect-to (keyword (str "p" page-id))))
    (-> (coast/redirect-to (keyword (str "p" page-id)))
      (update :session (fn [old] (if (= "1" (str page-id))
                                   nil
                                   {:paper-title (if (contains? params :paper-title)
                                                   (:paper-title params)
                                                   (:paper-title old))
                                    :doi         (if (contains? params :doi)
                                                   (:doi params)
                                                   (:doi old))}
                                   )))
      ;(assoc :flash help-id)
      ))
  )

(defn reset [request]
  (-> (response "Session deleted.")
    (assoc :session nil)))

