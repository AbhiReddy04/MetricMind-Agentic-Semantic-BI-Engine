# MetricMind Agentic Semantic BI Engine

##Overview

MetricMind is an AI-powered Business Intelligence (BI) platform that enables users to interact with enterprise data using natural language. Instead of writing SQL queries manually, users can ask business-related questions, and the system generates accurate insights, charts, and explanations using a semantic layer and AI agents.

The project aims to improve data accessibility, maintain business metric consistency, and provide intelligent analytical reports through a conversational interface.

## Problem Statement

Business users often struggle to retrieve meaningful insights from large datasets because they require SQL knowledge and understanding of complex database schemas.

MetricMind addresses this challenge by providing a semantic AI layer that understands business metrics and converts natural language queries into accurate analytical responses.

## Objectives

- Build an AI-powered conversational Business Intelligence platform.
- Convert natural language questions into analytical queries.
- Ensure metric consistency using a semantic layer.
- Generate visualizations for business insights.
- Deliver explainable AI-generated responses.

## Proposed Workflow

User
   │
   ▼
Next.js Chat Interface
   │
   ▼
LangChain Agent
   │
   ▼
Semantic Layer (Cube.dev / dbt)
   │
   ▼
Snowflake Data Warehouse
   │
   ▼
Query Results
   │
   ▼
Charts + AI Explanation


## Technology Stack

### Frontend
- Next.js
- React
- Tailwind CSS

### Backend
- Python
- LangChain

### AI Model
- Llama 3

### Semantic Layer
- Cube.dev
- dbt

### Database
- Snowflake

### Visualization
- Apache ECharts

### Version Control
- Git
- GitHub


## Development Status

🚧 Project initialization phase.
