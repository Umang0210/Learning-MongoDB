# MongoDB Query Examples

A comprehensive collection of MongoDB queries demonstrating various database operations, from basic CRUD to advanced aggregation pipelines and replication setup.

## 📋 Table of Contents

- [Overview](#overview)
- [Database Setup](#database-setup)
- [Query Categories](#query-categories)
  - [Basic Operations](#basic-operations)
  - [CRUD Operations](#crud-operations)
  - [Query Operators](#query-operators)
  - [Aggregation](#aggregation)
  - [Joins & Lookup](#joins--lookup)
  - [Indexing](#indexing)
  - [Schema Validation](#schema-validation)
  - [Replication](#replication)
- [File Structure](#file-structure)
- [Usage](#usage)

## Overview

This repository contains MongoDB query examples created as part of learning and practicing MongoDB database operations. The queries are organized into separate files, each focusing on specific MongoDB concepts and operations.

## Database Setup

The queries use the following databases:
- `lpu26a` - Main database for employee and product examples
- `lms` - Learning Management System database

## Query Categories

### Basic Operations

**[q1.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q1.js)** - MongoDB Shell Basics
- Basic mongosh commands
- Database and collection exploration
- `show dbs`, `show collections`

**[q2.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q2.js)** - Simple Insert & Find
- `insertOne()` with basic user data
- `find()` to retrieve documents

### CRUD Operations

**[q3.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q3.js)** - Insert Operations
- `insertOne()` - Single document insertion
- `insertMany()` - Multiple documents insertion
- Employee collection with multiple fields (name, email, department, salary, location)

**[q4.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q4.js)** - Find & Query Methods
- Basic `find()` queries with filters
- Projection to select specific fields
- `limit()`, `skip()`, `sort()` methods
- `count()` for document counting

**[q5.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q5.js)** - Comparison Operators
- `$eq` - Equal to
- `$gt` - Greater than
- `$gte` - Greater than or equal to
- `$lt` - Less than
- `$lte` - Less than or equal to
- `$ne` - Not equal to

**[q6.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q6.js)** - Advanced Query Operators
- Additional comparison and logical operators

**[q7.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q7.js)** - Update & Delete Operations
- `updateOne()` with `$set` and `$inc` operators
- `updateMany()` for bulk updates
- `upsert` option for insert-or-update
- `deleteOne()` and `deleteMany()`
- `$in` operator for multiple value matching
- `$exists` operator to check field existence

**[q8.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q8.js)** - Additional Update Operations

**[q9.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q9.js)** - Complex Update Scenarios

### Aggregation

**[q11.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q11.js)** - Basic Aggregation
- Introduction to aggregation pipelines

**[q12.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q12.js)** - Aggregation Pipeline
- `$match` - Filter documents
- `$project` - Select/compute fields
- `$sort` - Sort documents
- `$limit` - Limit results
- `$skip` - Skip documents
- `$group` - Group by field with aggregations:
  - `$sum` - Sum values
  - `$max` - Maximum value
  - `$min` - Minimum value
  - `$avg` - Average value
  - `$multiply` - Arithmetic operations

**[q13.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q13.js)** - Advanced Aggregation

**[q14.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q14.js)** - Complex Aggregation Pipelines

**[q15.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q15.js)** - More Aggregation Examples

### Joins & Lookup

**[q16.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q16.js)** - Lookup Operations (Joins)
- Basic `$lookup` - Simple joins between collections
- `$unwind` - Deconstruct array fields
- Advanced `$lookup` with pipeline and `$expr`
- Multiple lookups in single query
- Joining employees with orders and empDetails collections

**[q17.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q17.js)** - Learning Management System (LMS) Schema
- Multi-collection database design
- Collections: users, courses, modules, lessons, enrollments, lessonProgress, quizzes
- Demonstrates relational data modeling in MongoDB

**[q18.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q18.js)** - Additional Lookup Examples

**[q19.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q19.js)** - Complex Join Scenarios

**[q20.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q20.js)** - More Join Operations

**[report.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/report.js)** - Report Generation
- Complex aggregation for reporting
- Multiple lookups for comprehensive data retrieval
- Course and enrollment reports

### Indexing

**[q10.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q10.js)** - Indexing & Performance
- `explain("executionStats")` - Query performance analysis
- `createIndex()` - Create indexes for performance
- `getIndexes()` - List all indexes
- `dropIndex()` - Remove indexes
- `collation()` - Locale-specific string comparison

### Schema Validation

**[q21.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q21.js)** - Schema Validation
- `createCollection()` with validators
- JSON Schema validation with `$jsonSchema`
- Required fields enforcement
- Data type validation
- Minimum value constraints

**[q22.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q22.js)** - Additional Validation Examples

### Replication

**[q23.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q23.js)** - MongoDB Replication Setup
- Replica set configuration
- Setting up primary and secondary nodes
- Three-node replica set on different ports (27018, 27019, 27020)
- `rs.initiate()` - Initialize replica set
- `rs.config()` - View replica set configuration
- `rs.status()` - Check replica set status
- Read preference configuration for secondary nodes
- Data synchronization demonstration

**[q25.js](file:///c:/Users/umang/OneDrive/Desktop/pep/mongodb-qry/q25.js)** - Additional Replication Topics

## File Structure

```
mongodb-qry/
├── q1.js          # MongoDB Shell Basics
├── q2.js          # Simple Insert & Find
├── q3.js          # Insert Operations
├── q4.js          # Find & Query Methods
├── q5.js          # Comparison Operators
├── q6.js          # Advanced Query Operators
├── q7.js          # Update & Delete Operations
├── q8.js          # Additional Update Operations
├── q9.js          # Complex Update Scenarios
├── q10.js         # Indexing & Performance
├── q11.js         # Basic Aggregation
├── q12.js         # Aggregation Pipeline
├── q13.js         # Advanced Aggregation
├── q14.js         # Complex Aggregation Pipelines
├── q15.js         # More Aggregation Examples
├── q16.js         # Lookup Operations (Joins)
├── q17.js         # LMS Schema Design
├── q18.js         # Additional Lookup Examples
├── q19.js         # Complex Join Scenarios
├── q20.js         # More Join Operations
├── q21.js         # Schema Validation
├── q22.js         # Additional Validation Examples
├── q23.js         # Replication Setup
├── q25.js         # Additional Replication Topics
└── report.js      # Report Generation
```

## Usage

### Prerequisites
- MongoDB installed on your system
- MongoDB Shell (mongosh)

### Running the Queries

1. **Start MongoDB Server**
   ```bash
   mongod
   ```

2. **Connect to MongoDB Shell**
   ```bash
   mongosh
   ```

3. **Select Database**
   ```javascript
   use lpu26a
   ```

4. **Run Queries**
   - Open any `.js` file
   - Copy and paste queries into mongosh
   - Execute line by line or in blocks

### For Replication Setup (q23.js)

1. **Create Required Directories**
   ```bash
   mkdir -p d:\mongo-replica\usa
   mkdir -p d:\mongo-replica\uk
   mkdir -p d:\mongo-replica\india
   ```

2. **Start Replica Set Members**
   ```bash
   # Terminal 1
   mongod --replSet rs1 --dbpath "d:\mongo-replica\usa" --port 27018
   
   # Terminal 2
   mongod --replSet rs1 --dbpath "d:\mongo-replica\uk" --port 27019
   
   # Terminal 3
   mongod --replSet rs1 --dbpath "d:\mongo-replica\india" --port 27020
   ```

3. **Initialize Replica Set**
   - Connect to primary: `mongosh --port 27018`
   - Run the replica set initialization code from `q23.js`

## Key Concepts Covered

- ✅ Basic CRUD Operations
- ✅ Query Operators (Comparison, Logical, Element)
- ✅ Aggregation Framework
- ✅ Lookup/Joins between collections
- ✅ Indexing and Performance Optimization
- ✅ Schema Validation with JSON Schema
- ✅ Replica Set Configuration
- ✅ Data Modeling (Embedded vs Referenced)
- ✅ Projection and Field Selection
- ✅ Sorting, Limiting, and Pagination

## Collections Used

- `employees` - Employee data with departments and salaries
- `products` - Product catalog
- `orders` - Order records
- `users` - User accounts
- `courses` - Course information (LMS)
- `modules` - Course modules (LMS)
- `lessons` - Learning lessons (LMS)
- `enrollments` - Student enrollments (LMS)
- `lessonProgress` - Learning progress tracking (LMS)
- `quizzes` - Assessment questions (LMS)
- `vendors` - Vendor data (for validation examples)
- `empDetails` - Extended employee information

## Author

Created as part of MongoDB learning at LPU

## License

Educational purposes only
