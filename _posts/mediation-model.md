---
title: Mediation model in R with DiagrammeR
layout: post
---

How to use DiagrammeR to plot a mediation model with one independent variable, one dependent variable and two mediators.

```r
library(DiagrammeR)

grViz("
	digraph causal {
	
	  # Nodes.
	  node [shape = rectangle, fontname = Helvetica]
	  IV1 [label = 'IV']
	  ME1 [label = 'Mediator 1']
	  DV [label = 'DV']
	  ME2 [label = 'Mediator 2']
	  
	  # Edges.
	  edge [color = black, arrowhead = normal]
	  rankdir = LR
	  IV1->DV
	  ME1->DV
	  IV1->ME1
	  IV1->ME2
	  ME2->DV

	  # Graph.
	  graph [overlap = true, fontsize = 10]
	}")
  ```
